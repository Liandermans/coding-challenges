"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const binary = n.toString(2); // Convert base-10 to base-2

  // Count consecutive characters, print maximum number of consecutive 1's
  let max = 0;
  let currentMax = 1;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      const curr = binary[i];
      const next = binary[i + 1];
      if (curr === next) {
        currentMax++;
      } else {
        max = Math.max(max, currentMax);
        currentMax = 1;
      }
    }
  }
  console.log(max);
}
