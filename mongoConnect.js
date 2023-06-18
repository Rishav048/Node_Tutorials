// npm i mongodb;
const { MongoClient } = require("mongodb");
const database = "products";
const mongoUrl = `mongodb://127.0.0.1:27017/`;
const client = new MongoClient(mongoUrl);

const getData = async () => {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("mobiles");
    collection.insertOne({ name: "Nokia", price: 909 });
    let response = await collection.find({}).toArray();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

getData();
