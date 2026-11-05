// Herinneringen: agenda-afspraak (.ics) + banner in de app
import * as store from './store.js';

const DAYS = [['MO', 'ma'], ['TU', 'di'], ['WE', 'wo'], ['TH', 'do'], ['FR', 'vr'], ['SA', 'za'], ['SU', 'zo']];
export { DAYS };

export function getReminder() {
  return { on: false, time: '20:00', days: ['MO', 'WE', 'FR', 'SU'], ...(store.setting('reminder') || {}) };
}

// Banner op de startpagina: alleen op gekozen dagen, na het gekozen tijdstip, als je vandaag nog niets gedaan hebt
export function bannerHtml() {
  const r = getReminder();
  if (!r.on) return '';
  const now = new Date();
  const code = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][now.getDay()];
  const [hh, mm] = r.time.split(':').map(Number);
  const s = store.get();
  const learnedToday = s.lastDay === store.today() && s.todayXp > 0;
  if (!r.days.includes(code) || learnedToday || now.getHours() * 60 + now.getMinutes() < hh * 60 + mm) return '';
  return `<a class="card tile" href="#/vijf" style="flex-direction:row;align-items:center;gap:12px;border:2px solid var(--yellow);background:var(--yellow-soft)">
    <span class="te">⏰</span><span style="flex:1"><b>Tijd voor je Frans!</b><br><span class="small">Vandaag nog niet geleerd. Even 5 minuten?</span></span><span class="btn small yellow">Go</span></a>`;
}

// Agendabestand met een terugkerende afspraak + melding
export function downloadIcs() {
  const r = getReminder();
  const [hh, mm] = r.time.split(':');
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const end = `${String((+hh + (mm >= '45' ? 1 : 0)) % 24).padStart(2, '0')}${String((+mm + 15) % 60).padStart(2, '0')}00`;
  const url = location.origin + location.pathname;
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//FransLeren//NL', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:fransleren-${Date.now()}@fransleren`,
    `DTSTAMP:${ymd}T000000Z`,
    `DTSTART:${ymd}T${hh}${mm}00`,
    `DTEND:${ymd}T${end}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${r.days.join(',')}`,
    'SUMMARY:🐌 Frans oefenen (FransLeren)',
    `DESCRIPTION:Even 5-15 minuten Frans! Open: ${url}`,
    `URL:${url}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Tijd voor je Frans! 🐌', 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'fransleren-herinnering.ics';
  document.body.appendChild(a); a.click(); a.remove();
}
