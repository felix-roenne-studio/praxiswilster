import { rateLimit, getIp } from './_ratelimit.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const ip = getIp(req);
  const { ok, retryAfter } = rateLimit(ip, { max: 5, windowMs: 15 * 60 * 1000 });

  if (!ok) {
    res.setHeader('Retry-After', retryAfter);
    return res.status(429).json({ ok: false, error: 'Zu viele Versuche. Bitte warte kurz.' });
  }

  const { adminPassword } = req.body;
  if (adminPassword === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false });
}
