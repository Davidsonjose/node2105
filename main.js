const { data } = require("./data");
const {calAge} = require("./function")

// console.log(data);
let functionImported = calAge(58);
console.log(functionImported);
// console.log(calAge())

data.map((e) => {
  // console.log()
  const aboutMe = `My name is ${e.name} and i am ${e.age} years old and i am ${e.complexion} in complexion`;
  console.log(aboutMe)
});
