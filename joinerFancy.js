"use strict";

function numberJoinerFancy(start, end, separator = "_") {
  let result = "";
  let current = start;
  while (current <= end) {
    result += current;
    if (current < end) {
      result += separator;
    }
    current++;
  }
  return result;
}
console.log(numberJoinerFancy(1, 5, "$"));
