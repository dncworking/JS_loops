"use strict";

function numberJoinerWhile(start, end) {
  let result = "";
  let current = start;
  while (current <= end) {
    result += current;

    if (current < end) {
      result += "_";
    }
    current++;
  }
  return result;
}

console.log(numberJoinerWhile(1, 5));
console.log(numberJoinerWhile(3, 7));
