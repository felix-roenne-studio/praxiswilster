// In-memory rate limiter for serverless (per warm instance)
// Max attempts per window per IP — stops brute-force within a function instance.

const store = new Map(); // ip -> { count, resetAt }

/**
 * @param {string} ip
 * @param {object} opts
 * @param {number} opts.max      - max attempts per window (default 5)
 * @param {number} opts.windowMs - window in ms (default 15 min)
 * @returns {{ ok: boolean, remaining: number, retryAfter: number }}
 */
export function rateLimit(ip, { max = 5, windowMs = 15 * 60 * 1000 } = {}) {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1, retryAfter: 0 };
  }

  entry.count += 1;

  if (entry.count > max) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { ok: false, remaining: 0, retryAfter };
  }

  return { ok: true, remaining: max - entry.count, retryAfter: 0 };
}

/** Extract real IP from Vercel request headers */
export function getIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}
