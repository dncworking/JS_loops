"use strict";

function numberJoinerFor(start, end) {
  let result = "";
  let current = start;
  for (let i = start; i <= end; i++) {
    result += current;
    if (current < end) {
      result += "_";
    }
    current++;
  }
  return result;
}

console.log(numberJoinerFor(1, 5));
console.log(numberJoinerFor(3, 7));
