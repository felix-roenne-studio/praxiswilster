/**
 * Preview middleware — active when PREVIEW_ACTIVE=1 (default)
 * Set PREVIEW_ACTIVE=0 via /admin dashboard to go live.
 */
export const config = {
  matcher: ['/((?!gate\\.html|admin\\.html|api/|images/|_vercel).*)'],
};

export default function middleware(req) {
  const previewActive = process.env.PREVIEW_ACTIVE;
  if (previewActive === '0') return;

  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';')
      .map(c => c.trim())
      .filter(Boolean)
      .map(c => {
        const i = c.indexOf('=');
        return [c.slice(0, i).trim(), c.slice(i + 1).trim()];
      })
  );

  if (cookies['pl_auth'] !== 'ok') {
    return Response.redirect(new URL('/gate.html', req.url), 302);
  }
}
