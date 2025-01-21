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
  const N = parseInt(readLine().trim(), 10);
  const checkConditions = (N) => {
    if (N % 2 == 1) {
      return "Weird";
    } else if (N >= 2 && N <= 5) {
      return "Not Weird";
    } else if (N >= 6 && N <= 20) {
      return "Weird";
    } else if (N > 20) {
      return "Not Weird";
    }
  };
  console.log(checkConditions(N));
}
