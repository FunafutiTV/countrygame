import { connectToDatabase } from '../../lib/connectToDatabase';

export default async function handler(req, res) {
    try {
        const { mongoClient } = await connectToDatabase();
        const db = mongoClient.db("countrygame");
        const collection = db.collection("midnight"); // Connect to the countrygame/midnight database
        const sendArray = req.body;
        const sendObject = {array:sendArray};
        const results = await collection.insertOne(sendObject) // Insert the new array to the database
        res.statusCode = 200;
        console.log(`Successfully inserted item with _id: ${results.insertedId}`)
        res.end()
    } catch (e) {
        console.log(`Failed to insert item: ${e}`)
        res.status(500).json(e);
    }
}