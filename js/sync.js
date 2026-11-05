// Voortgang overzetten zonder server: JSON → deflate → base64url-code
import * as store from './store.js';

const b64url = bytes => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64url = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));

async function pipe(bytes, stream) {
  const res = new Response(new Blob([bytes]).stream().pipeThrough(stream));
  return new Uint8Array(await res.arrayBuffer());
}

export async function makeCode() {
  const json = new TextEncoder().encode(store.exportData());
  if ('CompressionStream' in window) {
    const z = await pipe(json, new CompressionStream('deflate-raw'));
    return 'FL1z' + b64url(z);
  }
  return 'FL1j' + b64url(json);
}

export async function readCode(code) {
  const c = code.trim().replace(/\s+/g, '');
  if (!c.startsWith('FL1')) throw new Error('Dit is geen FransLeren-code.');
  const body = unb64url(c.slice(4));
  const bytes = c[3] === 'z' ? await pipe(body, new DecompressionStream('deflate-raw')) : body;
  store.importData(new TextDecoder().decode(bytes));
}
