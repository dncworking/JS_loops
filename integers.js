"use strict";
function sumOfRange(leftSummand, rightSummand) {
  let start = Math.min(leftSummand, rightSummand);
  let end = Math.max(leftSummand, rightSummand);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfRange(1, 5));
console.log(sumOfRange(-3, 4));
