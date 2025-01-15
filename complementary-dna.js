function dnaStrand(dna) {
  const charMap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  let complementary = "";
  for (let char of dna) {
    complementary += charMap[char] || char;
  }
  return complementary;
}
