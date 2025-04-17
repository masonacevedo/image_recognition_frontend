export default async function handler(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  const apiKey = process.env.SERP_API_KEY;
  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&engine=google&num=10&api_key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}

