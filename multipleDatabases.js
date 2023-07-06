const { MongoClient } = require("mongodb");
const MongoUrl = `mongodb://127.0.0.1:27017/`;

const databases = ["One", "Two", "Three", "Four", "Five"];

const Connection = async () => {
  const client = new MongoClient(MongoUrl);

  try {
    let result = await client.connect();
    databases.forEach((DataBase) => {
      let db = result.db(DataBase);
      console.log(`Connected to ${DataBase}`);
    });
  } catch (err) {
    console.log(err);
  }
};

Connection();
