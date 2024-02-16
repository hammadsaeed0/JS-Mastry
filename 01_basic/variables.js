// Your solution to the problem is almost correct. However, the problem asked you to swap the values of a and b without using a temporary variable. In your solution, you directly assigned new values to a and b, but this would overwrite the original values.

let a = 10;
let b = 20;
function swap() {
  [a, b] = [b, a];
}
swap();
console.table([a, b]);

// Var Does not follow any Block Scope

function example() {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // Output: 10
  }
  console.log(y); // Output: 20
}
