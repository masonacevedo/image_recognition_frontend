import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const [exa, google] = await Promise.all([
            redis.get("exa"),
            redis.get("google")
        ]);

        return res.status(200).json({
            exa: parseInt(exa || "0"),
            google: parseInt(google || "0")
        });

    } catch (err) {
        console.error("Error fetching vote counts:", err);
        return res.status(500).json({ error: "Failed to fetch vote counts" });
    }
}

