import { rateLimit, getIp } from './_ratelimit.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  const ip = getIp(req);
  const { ok, retryAfter } = rateLimit(ip, { max: 10, windowMs: 15 * 60 * 1000 });
  if (!ok) {
    res.setHeader('Retry-After', retryAfter);
    res.writeHead(302, { Location: '/gate.html?err=2' });
    res.end();
    return;
  }

  let body = '';
  await new Promise((resolve, reject) => {
    req.on('data', chunk => { body += chunk; });
    req.on('end', resolve);
    req.on('error', reject);
  });

  const params = new URLSearchParams(body);
  const pw = params.get('password') || '';

  const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD;
  if (!CLIENT_PASSWORD) {
    res.writeHead(500).end('CLIENT_PASSWORD env var not set');
    return;
  }

  if (pw === CLIENT_PASSWORD) {
    res.setHeader('Set-Cookie', [
      'pl_auth=ok; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800',
      'pl_preview=1; Path=/; Secure; SameSite=Strict; Max-Age=28800',
    ]);
    res.writeHead(302, { Location: '/' });
    res.end();
  } else {
    res.writeHead(302, { Location: '/gate.html?err=1' });
    res.end();
  }
}
