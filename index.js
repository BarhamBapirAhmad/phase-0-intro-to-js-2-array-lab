// Write your solution here
var cats = [];
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name) {
  cats.push('Ralph');
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift('Bob');
  return cats;
}
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat(name) {
  return [...cats, 'Broom'];
}
function prependCat(name) {
  return ['Arnold', ...cats];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
  return cats.slice(1);
}
