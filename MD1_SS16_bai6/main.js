const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];

function getSum(total, num) {
  return total + Math.round(num);
}

alert(arr1.reduce(getSum,0));
alert(arr2.reduce(getSum,0));
alert(arr3.reduce(getSum,0));