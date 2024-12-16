import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

if (!uri) {
  throw new Error("Please add your Mongo URI to .env");
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;