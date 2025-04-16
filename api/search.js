export default async function handler(req, res) {
    console.log("in handler");
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  res.status(200).json(data);
}

