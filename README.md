# Exploring generators

## Words to explore
Coroutines,

## What do they do?

It seems as though one creates a generator, and then assign
the function that it returns to a variable, much the same as
creating a higher order function for use in functional
programming.

```js
function generateAdder(n) {
  return function (i) {
    return n + i;
  };
}

// 'generate' an adder function for a specific value
var add2To = generateAdder(2);

console.log(add2To(5)); // prints 7
```

We *generated* a function that adds 2 to it's param.
The closure keeps the value of n, and we can reuse the add2To
over and over again.

So then a generator seems to be returning a function for us to
reuse, and adding some API functions to this function. This may
not be the actual case, however I'll delete all this if I'm
wrong.

## Create our first generator

The star '*' tells JS that this is going to be a generator.
This example is not the same as the last, it is not trying to
replicate the same functionality.

```js
function* iterator(startValue) {
  while (true) {
    yield startValue += 1;
  }
}

// Now we assign the generated function to a variable
var iterateFrom5 = iterator(1);

console.log(iterateFrom5()); // Object is not a function. What!
console.log(iterateFrom5);
```

What can we see here? The iterateFrom5 is an object literal. When we console the
object, it gives us no clues whatsoever about what is in that object (node).

Looking at the mozilla page we see it has an API.

### What is the yield keyword?
> Javascript 1.7 introduced generators to javascript, the key feature being a
> new yield keyword which suspends execution of a function.
>> <cite>*[James Long](http://jlongster.com/2012/10/05/javascript-yield.html)*
</cite>

So it seems the **yield** keyword and it's functionality are the most important
things to try to understand in order to grasp the fundamentals of generators.

## API functions
### next()

```js
console.log(iterateFrom5.next()); // { value: 2, done: false }
console.log(iterateFrom5.next().value); // 3
console.log(iterateFrom5.next().value); // 4
console.log(iterateFrom5.next().value); // 5
```

### send()

~~It seems like this will reinitialise the generator with a new parameter value,
or it simply changes the value without initialising anything, if that makes any
sense~~.

Send, it seems at least on node 0.11.13 does not exist. Rather, I found in a
great article about [Ecmascript 6 native promises](http://www.html5rocks.com/en/tutorials/es6/promises/)
no mention of them at all, and the use of next() with an input instead.

If we append this code to the code above so we don't have to write it all out
again, you can see what the next() function does.

```js
console.log(iterateFrom5.next().value); // 6
// console.log(iterateFrom5.send(100).value); // 'undefined' is not a function

```

# Reading materials
- [Out of date blog by James Long](http://jlongster.com/2012/10/05/javascript-yield.html)
- [Mozilla developer basic docs on generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [taskjs an experimental library](http://taskjs.org/)
- [Q.js spawn function](https://github.com/kriskowal/q/wiki/API-Reference#qspawngeneratorfunction)
- [An insightful conversation on SO](http://stackoverflow.com/questions/23099855/koa-co-bluebird-or-q-generators-promises-thunks-interplay-node-js)
