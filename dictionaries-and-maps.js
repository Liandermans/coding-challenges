function processData(input) {
  const lines = input.split("\n"); // Split the input into lines
  const n = parseInt(lines[0], 10); // Number of entries in the phonebook
  const phoneBook = new Map(); // Create the phonebook

  // Fill the phonebook with n entries
  for (let i = 1; i <= n; i++) {
    const [name, phoneNumber] = lines[i].split(" ");
    phoneBook.set(name, phoneNumber);
  }

  // Process each query
  for (let i = n + 1; i < lines.length; i++) {
    const queryName = lines[i];
    if (queryName) {
      if (phoneBook.has(queryName)) {
        console.log(`${queryName}=${phoneBook.get(queryName)}`);
      } else {
        console.log("Not found");
      }
    }
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
