import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@user1.istzhai.mongodb.net/?retryWrites=true&w=majority`;

let client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
let clientPromise = client.connect();

export default async function connectToDatabase() {
    if (!client.isConnected()) await client.connect()
    return client
  }

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  ;
  clientPromise = client.connect();
}

export {clientPromise, client};
