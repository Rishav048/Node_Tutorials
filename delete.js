const dbConnect = require("./mongodb");

const DeleteFtn = async () => {
  try {
    let res = await dbConnect();
    let Deleteddata = await res.deleteOne({ name: "Nokia" });
    console.log(Deleteddata);
    let data = await res.find().toArray();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

DeleteFtn();
