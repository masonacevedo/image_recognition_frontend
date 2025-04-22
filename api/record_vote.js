import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export default async function handler(req, res) {
    try {
        await redis.incr(preferred_search_engine);
        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Error recording vote :", err);
        res.status(500).json({ error: "Redis write failed" });
    }
}

