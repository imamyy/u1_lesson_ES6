// Destructuring
const person = {
  name: "Amy",
  age: 25,
  hometown: "Viet Nam",
};
// Using the destructuring syntax to extract all 3 keys into variables
const { name, age, hometown } = person;
console.log(name);
console.log(age);
console.log(hometown);
// Spreading out
// Define 2 arrays, evens and odds filled with even and odd numbers
const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
// Using the spread operator, make a new array numbers that contains all of the evens and odds
const numbers = [...evens, ...odds];
console.log(numbers);

// Merging objects
// Define an object faveFoods that has keys representing your favorite foods and the values should be the restaurant or locale where they are from
const faveFoods = {
  pho: "Viet Nam",
  bbq: "Korea",
  sushi: "Japan",
};
// Make another object friendFaveFoods and do the same thing
const friendFaveFoods = {
  banhmi: "DC",
  spaghetti: "Italy",
  burger: "America",
};
// Using the spread operator, build a final object allFoods with the items from faveFoods and friendFaveFoods together

const allFoods = {
  ...faveFoods,
  ...friendFaveFoods,
};
console.log(allFoods);
