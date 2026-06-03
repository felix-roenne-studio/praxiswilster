export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = '';
  await new Promise((resolve, reject) => {
    req.on('data', c => body += c);
    req.on('end', resolve);
    req.on('error', reject);
  });

  let payload;
  try { payload = JSON.parse(body); } catch {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ ok: false, error: 'ADMIN_PASSWORD env var not set' });
  }
  if (payload.adminPassword !== ADMIN_PASSWORD) {
    return res.status(403).json({ ok: false, error: 'Unauthorized' });
  }

  if (payload.action !== 'go-live') {
    return res.status(400).json({ ok: false, error: 'Unknown action' });
  }

  const VERCEL_TOKEN  = process.env.VERCEL_TOKEN;
  const PROJECT_ID    = process.env.VERCEL_PROJECT_ID;
  const TEAM_ID       = process.env.VERCEL_TEAM_ID;

  if (!VERCEL_TOKEN || !PROJECT_ID) {
    return res.status(500).json({ ok: false, error: 'Missing VERCEL_TOKEN or VERCEL_PROJECT_ID' });
  }

  const teamQuery = TEAM_ID ? `?teamId=${TEAM_ID}` : '';

  try {
    // Try to create PREVIEW_ACTIVE=0 env var
    const envRes = await fetch(
      `https://api.vercel.com/v10/projects/${PROJECT_ID}/env${teamQuery}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: 'PREVIEW_ACTIVE',
          value: '0',
          type: 'plain',
          target: ['production', 'preview', 'development'],
        }),
      }
    );

    if (!envRes.ok) {
      // Env var likely already exists — find and PATCH it
      const listRes = await fetch(
        `https://api.vercel.com/v9/projects/${PROJECT_ID}/env${teamQuery}`,
        { headers: { Authorization: `Bearer ${VERCEL_TOKEN}` } }
      );
      const listData = await listRes.json();
      const existing = listData.envs?.find(e => e.key === 'PREVIEW_ACTIVE');

      if (existing) {
        await fetch(
          `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${existing.id}${teamQuery}`,
          {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: '0', target: ['production', 'preview', 'development'] }),
          }
        );
      }
    }

    // Trigger new production deployment
    const deployRes = await fetch(
      `https://api.vercel.com/v13/deployments${teamQuery}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: PROJECT_ID, target: 'production', source: 'api' }),
      }
    );

    return res.status(200).json({ ok: true, deploy: await deployRes.json() });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
