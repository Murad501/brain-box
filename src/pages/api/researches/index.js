import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db("Brain_Box");
  const researchesCollection = db.collection('researches')
  
  if (req.method === "POST") {
    const research = req.body;

    // Insert data into MongoDB
    const result = await researchesCollection.insertOne(research);

    res.status(201).json(result);
  }else if(req.method === 'GET'){
    const query = {isPrivate: false}
    const result = await researchesCollection.find(query).toArray()
    res.status(201).json(result)

  }
}

export default handler;