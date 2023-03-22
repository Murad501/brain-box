import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db("Brain_Box");
  const researchesCollection = db.collection('researches')
  if (req.method === "PUT") {
    const {id} = req.query;
    const love = req.body.love
    const query = {_id: new ObjectId(id)}
    const updateDoc = {
      $set: {
        "actions.love": love
      }
    }
    // console.log('love',love)
    // const queryResearch = await researchesCollection.findOne(query)
    // console.log(queryResearch)
    // // Insert data into MongoDB
    const result = await researchesCollection.updateOne(query, updateDoc)
    console.log(result)
    res.status(200).json(result);
  }
}

export default handler;