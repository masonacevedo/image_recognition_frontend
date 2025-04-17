import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const filePath = path.join(process.cwd(), 'nhl_data.json'); // Adjust filename and path as needed
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContents);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Failed to load data" });
  }
}

