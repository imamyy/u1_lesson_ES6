# JavaScript ES6 Syntax

![Future](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxrvxCwG0uFivu%2Fgiphy.gif&f=1&nofb=1)

## Lesson Overview
In this lesson, we'll learn all about the new (as of 2015 lol) standard in JavaScript syntax: ES6 or ECMAScript 2015.

## Objectives
- Review
- Learn arrow functions and how they can clean up our code
- Learn about the spread operator and the power it gives us
- Learn all about destructuring
- Get practice in with each of these new concepts

## Lesson Instructions

### Review

**Function Declaration:**

```js
function error(status) {
  console.error(status)
}
```

**Function Expression:**

```js
const error = function(status) {
  console.error(status)
}
```

**Anonymous Function:**

```js
function(status) {
  console.error(status)
}
```

### ES6

![arrow](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftransom.org%2Fwp-content%2Fuploads%2F2012%2F07%2Fstraight-arrow-marquee.gif&f=1&nofb=1)

#### ES6 Arrow Functions

```js
const error = (status) => { 
  console.error(status)
}
```

**You can go one step further:**

```js
const error = status => console.error(status)
```

**No parameters:**

```js
const error = () => console.error('404')
```

**Multiple Parameters:**

```js
const error = (status, msg) => console.error(status, msg)
```

**Multiple lines:**

```js
const error = (status) => {
  let msg = 'Error: '
  console.error(msg, status)
}
```

![...](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sheknows.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fellipsis_xr1tub.gif&f=1&nofb=1)

#### Spread Syntax

ES6 introduced the spread syntax for dealing with cases when we want to generate new versions of Arrays and Objects in a clean, readable manner.

The basic intuition behind `...` is that it "spreads out" or "unpacks" all of the values in an Array or Object.

```javascript
const evens = [2, 4, 6];
const odds = [1, 3, 5];

const moreEvens = [...evens, 8, 10];

console.log(moreEvens);
```

<details>
    <summary>Output:</summary>
    
```
[ 2, 4, 6, 8, 10 ]
```

</details>

Without the `...` we would have gotten the following:

```
const evens = [2, 4, 6];
const odds = [1, 3, 5];

const moreEvens = [evens, 8, 10];

console.log(moreEvens);
```
<details>
    <summary>Output:</summary>
    
```
[ [ 2, 4, 6 ], 8, 10 ]
```

</details>

The spread syntax allows us to seamlessly integrate nested values with other elements in a single array.

The order is still preserved when spreading out multiple arrays.

We can easily use more than one spread operator in a single line:

```javascript
const evens = [2, 4, 6];
const odds = [1, 3, 5];

const nums = [...evens, ...odds, 8, 9, 10];

console.log(nums);
```

<details>
    <summary>Output:</summary>
    
```
[ 2, 4, 6, 1, 3, 5, 8, 9, 10 ]
```

</details>

Similar operations are possible with Objects:

```javascript
const people = {
  'JayZ': { shirt: 'goldfish' },
  'Drake': { shirt: 'David Hasselhoff' },
  'JohnMaster': { shirt: 'button down' }
};

const otherPeople = {
  'Jason': { shirt: 'coffee' },
  'Mimi': { shirt: 'wonder woman' }
};

const allPeople = {
  ...people,
  ...otherPeople
};

console.log(allPeople);
```

<details>
    <summary>Output:</summary>

```
{ JayZ: { shirt: 'goldfish' },
  Drake: { shirt: 'David Hasselhoff' },
  JohnMaster: { shirt: 'button down' },
  Jason: { shirt: 'coffee' },
  Mimi: { shirt: 'wonder woman' } }
```

</details>

Note how latter values will "overwrite" former ones:

```js
const letters = {
  a: 1,
  b: 2,
  c: 3
};

const moreLetters = {
  d: 4,
  e: 5,
  a: 10
};

const allLetters = {
  ...letters,
  ...moreLetters
};

console.log(allLetters);
```

<details>
    <summary>Output:</summary>
    
```
{ a: 10, b: 2, c: 3, d: 4, e: 5 }
```

The value of `a` is 10 since that was the "last" value associated with the `a` key.

</details>

Just like Arrays, Objects can mix directly declared keys with `spread`ed values:

```javascript
const letters = {
  a: 1,
  b: 2,
  c: 3
};

const moreLetters = {
  d: 4,
  e: 5,
  a: 10
};

const allLetters = {
  ...letters,
  g: 20,
  u: 30,
  ...moreLetters
};

console.log(allLetters);
```

<details>
    <summary>Output:</summary>
    
```
{ a: 10, b: 2, c: 3, g: 20, u: 30, d: 4, e: 5 }
```

</details>

### Use Cases and Drawbacks

The spread operator is quickly becoming one of the key work horses of ES6.  The flexible and clean syntax allows smooth merging of data from disparate sources as well as a safe way to handle state updates in frameworks like React.

There is still a problem with `pass by reference`-type semantics.  The spread operator only generates a new _shallow_ value of the data structure that is being unpacked.  If an Array or Object has nested Arrays or Objects as elements, then the nested elements are not similarly `spread`ed.

Without nested compound data structures everything is fine:

```javascript
const letters = {
  a: 1,
  b: 2,
  c: 3
};

const allLetters = {
  ...letters,
  g: 20,
  u: 30,
};

allLetters.a = 20;

console.log('all letters: ', allLetters);
console.log('letters: ', letters)
```

<details>
    <summary>Output:</summary>
    
```
all letters:  { a: 20, b: 2, c: 3, g: 20, u: 30 }
letters:  { a: 1, b: 2, c: 3 }
```

</details>

Notice how `a` is not mutated in the original Object, since a new copy is created when using the spread operator.

But what if that value is nested in another obect?

```javascript
const letters = {
  vowels: { a: 1 },
  a: 1,
  b: 2,
  c: 3
};

const allLetters = {
  ...letters,
  g: 20,
};

allLetters.vowels.a = 20;

console.log('all letters: ', allLetters);
console.log('letters: ', letters)
```

<details>
    <summary>Output:</summary>

```
all letters:  { vowels: { a: 20 }, a: 1, b: 2, c: 3, g: 20 }
letters:  { vowels: { a: 20 }, a: 1, b: 2, c: 3 }
```

</details>

![think](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd33wubrfki0l68.cloudfront.net%2F1bea221a4eada028b51550a1201f08969866a3cb%2F38cc9%2Fdf93080036f11c6711f402238caf0bcb%2Froll-safe.gif&f=1&nofb=1)

### Destructuring

In addition to the spread syntax, ES6 also introduced a mechanism for extracting one or more key/value pairs from an object.  The syntax resembles variable assignment with a few tweaks:

```javascript
const person = { first_name: 'Drake', last_name: 'Talley', city: 'Memphis' };
const { first_name, last_name } = person;

console.log(first_name);
```

The above will log the value of `first_name` to the console:

```
Drake
```

The overall effect is that variable names matching the key names of the object are auto-initialized and assigned the value associated with that key from the object.

If the key does not exist in the object its value will be `undefined`.

For what it's worth, this same effect works in "reverse".  Key/value pairs can be inserted into an object literal if a matching variable is found in scope.

```javascript
const first = 'Bobby';
const last = 'Talley'

const person = {
  first,
  last
};
console.log(person);
```

The above will log the following to the console

```
{ first: 'Bobby', last: 'Talley' }
```

Finally, the spread operator in these contexts will grab everything not explicitly extracted into a variable.

```javascript
const person = {
  first: 'Bobby',
  last: 'Talley',
  city: 'Memphis'
};

const { city, ...other } = person;

console.log(other)
console.log(city);
```
will yield

```
{ first: 'Bobby', last: 'Talley' }
Memphis
```
```javascript
 const getName = () => {
    return {
      first: 'Steve',
      last: 'VanWoerkom'
    }
  }
let {first, last} = getCoords()

console.log(first)
// <- Steve
console.log(y)
// <- VanWoerkom
```

![practice](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F8vkEKXvnXkyCZx8w6b%2Fgiphy.gif&f=1&nofb=1)

#### Practice

##### Destructuring
In a scratch .js file, define a JavaScript Object with three keys, `name`, `age`, and `hometown` (use your own info or your neighbors).

Try using the destructuring syntax to extract all three keys into variables.  Log out each variable to the console using `node scratch.js`.

Next, delete 2 of the destructured variables and try using the spread operator to extract two of the keys but not the third.

##### Spreading Out
Define two arrays, `evens` and `odds` filled with even and odd numbers.

Using the spread operator, make a new array `numbers` that contains all of the evens and odds.

#### Merging Objects

Define an object `faveFoods` that has keys representing your favorite foods and the values should be the restaurant or locale where they are from.

Now make another object `friendFaveFoods` and do the same thing but this time ask your neighbor what their favority foods are.

Using the `spread` operator, build a final object `allFoods` with the items from `faveFoods` and `friendFaveFoods` together.

## Lesson Recap
  We learned how ES6 introduced new things to JavaScript and made our code more readable.  We learned about the differences between ES5 and ES6 and why it's important we stick to ES6 going forward.
  
![done](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6HOkD1pSCne4E%2Fgiphy.gif&f=1&nofb=1)
  
## Resources
 - [What is ES6?](https://www.educba.com/what-is-es6/)
 - [W3Schools: ES6](https://www.w3schools.com/Js/js_es6.asp)
 - [Top 10 ES6 Features](https://webapplog.com/es6/)
