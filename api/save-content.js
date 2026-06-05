export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { adminPassword, aktuelles, urlaub } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  const token = process.env.GITHUB_TOKEN;
  const repo  = process.env.GITHUB_REPO; // e.g. "felix-roenne-studio/praxiswilster"
  const path  = 'content.json';
  const apiBase = `https://api.github.com/repos/${repo}/contents/${path}`;

  // Get current SHA
  const getRes = await fetch(apiBase, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  });
  const current = await getRes.json();
  const sha = current.sha;

  const content = Buffer.from(JSON.stringify({ aktuelles, urlaub }, null, 2)).toString('base64');

  const putRes = await fetch(apiBase, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Update Aktuelles via Admin',
      content,
      sha,
    }),
  });

  if (!putRes.ok) {
    const err = await putRes.json();
    return res.status(500).json({ ok: false, error: err.message });
  }

  return res.status(200).json({ ok: true });
}
