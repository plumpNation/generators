

function* iterator(startValue) {
  while (true) {
    yield startValue += 1;
  }
}

// Now we assign the generated function to a variable
var iterateFrom5 = iterator(1);

// console.log(iterateFrom5()); // object is not a function
console.log(iterateFrom5); // returns an object literal

console.log(iterateFrom5.next()); // returns an object { value: 2, done: false }
console.log(iterateFrom5.next().value); // returns 3
console.log(iterateFrom5.next().value); // returns 4
console.log(iterateFrom5.next().value); // returns 5

console.log(iterateFrom5.next(100).value); // returns 101
