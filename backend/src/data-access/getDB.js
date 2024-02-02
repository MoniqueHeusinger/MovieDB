import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

let _db;
//empty db - will be set after first connection --> singleton pattern

export async function getDB() {
  if (_db && _db instanceof Db) return _db;
  await client.connect();
  const db = client.db("video");
  _db = db;
  return db;
}
