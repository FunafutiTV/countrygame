import { connectToDatabase } from '../../lib/connectToDatabase';

export default async function handler(request, response) {
    try {
        const { mongoClient } = await connectToDatabase();
        const db = mongoClient.db("countrygame");
        const collection = db.collection("midnight");
        const array = await collection
            .findOne({name: "array"});
        response.status(200).json(array);
    } catch (e) {
        console.error(e);
        response.status(500).json(e);
    }
}