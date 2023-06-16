let fs = require("fs");
let path = require("path");
let dirName = path.join(__dirname, "Crud");
let fileName = `${dirName}/apple.txt`;
console.log(fileName);

// fs.writeFileSync(fileName, "This is my first file");

// fs.readFile(fileName, "utf8", (err, data) => {
//   console.log(data);
// });

// fs.appendFile(fileName, " add this to the text", (err) => {
//   if (!err) console.log("File updated");
// });

// fs.rename(fileName, `${dirName}/banana.txt`, (err) => {
//   if (!err) console.log("File renamed");
// });

//fs.unlinkSync(`${dirName}/banana.txt`);
