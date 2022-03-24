const fs = require("fs");
const path = require("path");

// let pathTwo = path.join(__dirname, "files/two.txt");

// // let readPathTwo = fs.readFileSync(pathTwo, "utf-8");
// // console.log(readPathTwo);

// let writeFilePathOne = path.join(__dirname, "files/one.txt");

// // const writeFileOne = fs.writeFileSync(
// //   writeFilePathOne,
// //   "Node js the best server side programming language for davidson"
// // );
// // console.log(`you have successfully written to ${writeFilePathOne}`);

// //Asyncronous methods
// fs.readFile(pathTwo, "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });
// fs.writeFile(writeFilePathOne, "i really love node js", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`you have succesfully written to ${writeFilePathOne}`);
//   }
// });

// console.log("Asyncronous method is the best jire");

// //TODO:
// //create other methods using syncronous and asyncronous ... methods are creating a file, deleting a file,
// //creating a folder, deleting a folder, appending to a file... move fill content and rename a file
// //NOTE: using syncronous and asyncronous methods

// //TODO:
// // presention on built in modules on nodejs... like http, fs, query-string, url and path

// // const pathWritingTo = path.join(__dirname, "file/one.txt");
// fs.mkdir("files", (err) => {
//   // if (err) throw err;
//   if (err) {
//     console.log(err);
//   }
//   console.log("A new folder has been created");
//   fs.writeFile(pathWritingTo, "I love node js", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("You have successfully written to");
//   });
//   fs.readFile(pathWritingTo, "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(`Here is the data you requested: ${data}`);
//   });
// });

// const pathWritingTo = path.join(__dirname, "file/one.txt");
// const pathWritingToo = path.join(__dirname, "files/one.txt");
// // promises
// fs.promises
//   .readFile(pathWritingTo, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// fs.promises
//   .writeFile(pathWritingToo, "Let always focus and not get distracted")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promisesPathOne = path.join(__dirname, "newss");
// //TODO:create a folder, and append to a file using the promise method
// fs.promises
//   .mkdir(promisesPathOne)
//   .then(() => {
//     console.log(`A new FOLDER ${promisesPathOne} has been created`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promisesAppendPath = path.join(__dirname, "new/one.txt");
// fs.promises.appendFile(promisesAppendPath, "I love programming").then(() => {
//   console
//     .log(
//       "A new file" + promisesAppendPath + "Has been appended to successfully"
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// });

const pathss = path.join(__dirname, "file/one.txt");
//async await method
const readFileAsync = async () => {
  try {
    const pathOne = path.join(__dirname, "files/one.txt");
    const pathTwo = path.join(__dirname, "file/one.txt");
    const readFile = await fs.readFileSync(pathOne, "utf-8");
    const readFile2 = await fs.readFileSync(pathTwo, "utf-8");
    console.log(readFile);
    console.log(readFile2);
    // return readFile2;
  } catch (error) {
    console.log(error);
  }
};
// const readFileAsync2 = async (paths) => {
//   try {
//     const readFile = await fs.readFileSync(paths, "utf-8");
//     const readFile2 = await fs.readFileSync(paths, "utf-8");
//     console.log(readFile);
//     console.log(readFile2);
//     // return readFile2;
//   } catch (error) {
//     console.log(error);
//   }
// };

readFileAsync();
// readFileAsync2(pathss);

