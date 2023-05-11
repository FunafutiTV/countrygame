import { connectToDatabase } from '../../lib/connectToDatabase';

export default async function handler(request, response) {
    try {
        const { mongoClient } = await connectToDatabase();
        const db = mongoClient.db("highscores");
        const collection = db.collection("highscores");
        const results = await collection
            .find({})
            .toArray();
        
        response.status(200).json(results);
    } catch (e) {
        console.error(e);
        response.status(500).json(e);
    }
}