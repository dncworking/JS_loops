"use strict";
function makeSquare(size) {
  let row = "*".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
makeSquare(5);


