const fs = require("fs");
const path = require("path");

let pathTwo = path.join(__dirname, "files/two.txt");

// let readPathTwo = fs.readFileSync(pathTwo, "utf-8");
// console.log(readPathTwo);

let writeFilePathOne = path.join(__dirname, "files/one.txt");

// const writeFileOne = fs.writeFileSync(
//   writeFilePathOne,
//   "Node js the best server side programming language for davidson"
// );
// console.log(`you have successfully written to ${writeFilePathOne}`);

//Asyncronous methods
fs.readFile(pathTwo, "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
fs.writeFile(writeFilePathOne, "i really love node js", (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`you have succesfully written to ${writeFilePathOne}`);
  }
});

console.log("Asyncronous method is the best jire");

//TODO:
//create other methods using syncronous and asyncronous ... methods are creating a file, deleting a file,
//creating a folder, deleting a folder, appending to a file... move fill content and rename a file
//NOTE: using syncronous and asyncronous methods

//TODO:
// presention on built in modules on nodejs... like http, fs, query-string, url and path
