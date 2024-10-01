/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArr = [];
  arr.forEach((element, i) => {
    if (fn(arr[i], i)) {
      filteredArr.push(element);
    }
  });
  return filteredArr;
};
