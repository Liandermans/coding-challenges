function processData(input) {
  // Split input by new lines
  const inputs = input.trim().split("\n");

  // The first input is the number of test cases
  const T = parseInt(inputs[0], 10);

  // Process each string
  for (let i = 1; i <= T; i++) {
    const s = inputs[i];
    const n = s.length;
    let evenChars = "";
    let oddChars = "";

    // Separate characters based on even and odd indices
    for (let j = 0; j < n; j++) {
      if (j % 2 === 0) {
        evenChars += s[j];
      } else {
        oddChars += s[j];
      }
    }

    // Print the result for this string
    console.log(`${evenChars} ${oddChars}`);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
