function calAge(yearOfBirth) {
  let currentYear = new Date().getFullYear();
  const cal = currentYear - yearOfBirth;
  return cal;
}

const data = [
  { name: "Davidson", age: 72, complexion: "Dark" },
  { name: "Daniel", age: 72, complexion: "Fair" },
  { name: "Busayo", age: 72, complexion: "Dark" },
];

const users = [
  { name: "Davidson", age: 72, complexion: "Dark" },
  { name: "Daniel", age: 72, complexion: "Fair" },
  { name: "Busayo", age: 72, complexion: "Dark" },
];

const bio = [
  { name: "Davidson", age: 72, complexion: "Dark" },
  { name: "Daniel", age: 72, complexion: "Fair" },
  { name: "Busayo", age: 72, complexion: "Dark" },
];

module.exports = {
  age: calAge,
  bio,
  users
};
