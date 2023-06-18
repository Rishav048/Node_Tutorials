const dbConnect = require("./mongodb");

const main = async () => {
  try {
    let resp = await dbConnect();
    resp = await resp.find({}).toArray();
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};

main();
