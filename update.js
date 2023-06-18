const dbConnect = require("./mongodb");

const UpateFtn = async () => {
  try {
    let res = await dbConnect();
    let data = await res.updateOne(
      { name: "Motorolla" },
      { $set: { name: "Nokia", price: 450 } }
    );
    let result = await res.find().toArray();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

UpateFtn();
