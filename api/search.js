export default async function handler(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

    let data = {1: "Mason", 2:" Acevedo"}
  res.status(200).json(data);
}

