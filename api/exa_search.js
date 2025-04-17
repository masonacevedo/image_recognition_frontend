export default async function handler(req, res) {
    console.log("exa handler");
    const query = req.query.q;
    console.log("query:", query);
    if (!query) {
        return res.status(400).json({ error: "Missing query" });
    }

    const apiKey = process.env.EXA_API_KEY;
    
    const response = await fetch("https://api.exa.ai/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            query: query,
            numResults: 10, 
            useAutoPrompt: true
        })
    });
    const data = await response.json();
    console.log("data:", data);

    res.status(200).json(data);
}

