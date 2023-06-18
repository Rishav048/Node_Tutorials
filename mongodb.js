const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const database = "products";

const dbConnect = async () => {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("mobiles");
    return collection;
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
