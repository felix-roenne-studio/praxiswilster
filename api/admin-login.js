export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { adminPassword } = req.body;
  if (adminPassword === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false });
}
