function one() {
  console.log(1);
}
function two() {
  one();
  console.log(2);
}
function three() {
  two();
  console.log(3);
}
three();
