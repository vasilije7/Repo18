// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);
let arrKey = shoppingList.keys();
for (let key of arrKey) {
  console.log("groceries:  " + key);
}
let arrValue = shoppingList.values();
for (let value of arrValue) {
  console.log("amount:  " + value);
}
for (let value of shoppingList) console.log(value);
// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
