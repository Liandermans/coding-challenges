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
  const S = readLine();

  try {
    console.log(
      Number.isNaN(Number(S))
        ? (() => {
            throw new Error("Bad String"); // If not a number, throw error
          })() // Immediately call the function
        : Number(S) // Convert S into number
    );
  } catch (error) {
    console.log(error.message); // Log error message
  }
}
