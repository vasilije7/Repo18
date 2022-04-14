let myArr = [];
// Only change code below this line
function* multiplication(x) {
  for (num of x) {
    x = x * 2;
    yield;
    myArr = myArr.push(x);
  }
  return x;
}
let num = multiplication(x);
for (num of x) {
  multiplication(3).next();
}

console.log(num);
// Only change code above this line
module.exports = multiplication;
