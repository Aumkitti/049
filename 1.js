function item1(x) {
  return -x + 5;
}

function item2(x) {
  return 0.5 * x + 2;
}

var xValue = 3;

var yValueItem1 = item1(xValue);
var yValueItem2 = item2(xValue);

console.log("สมการที่ 1: y =", yValueItem1);
console.log("สมการที่ 2: y =", yValueItem2);
