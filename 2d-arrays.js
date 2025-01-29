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
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  function maxHourglassSum(input) {
    let maxSum = -Infinity;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        let sum =
          input[i][j] +
          input[i][j + 1] +
          input[i][j + 2] +
          input[i + 1][j + 1] +
          input[i + 2][j] +
          input[i + 2][j + 1] +
          input[i + 2][j + 2];

        maxSum = Math.max(maxSum, sum);
      }
    }
    console.log(maxSum);
  }
  maxHourglassSum(arr);
}
