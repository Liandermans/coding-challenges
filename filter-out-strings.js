function filter_list(l) {
  // Return a new array: const filteredList
  // with the strings filtered out: array.filter(element => typeof element !== "string")

  const filteredList = l.filter((element) => typeof element !== "string");

  return filteredList;
}
