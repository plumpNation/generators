function print(str) {
  console.log('Do ' + str);
}

// http://syzygy.st/javascript-coroutines/#demo
function coroutine(f) {
    var o = f(); // instantiate the coroutine

    return function(x) {
        return o.next(x);
    }
}

var killme = coroutine(function*(n) {
  var i = 0;
  console.log(n); // undefined, the 5 isn't here
  console.log('Starting');
  var num1 = yield 'I stopped!!';
  console.log(num1);
  i += num1;
  print(++i)
  print(++i)
  var num2 = yield 'I want another number!!';
  console.log(num2);
  i += num1;
  print(++i)
  print(++i)
  yield 'I finished!!';
});

console.log(killme(5)); // NOTE: {done: false}
console.log(killme(10)); // NOTE: {done: false}
console.log(killme(20, 24)); // NOTE: {done: false} AND 24 is ignored
console.log(killme(100)); // returns undefined value, but NOTE: {done: true}
