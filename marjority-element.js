/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counts = {};
  let majority = nums.length / 2;

  for (e of nums) {
    counts[e] = (counts[e] || 0) + 1;
    if (counts[e] > majority) {
      return e;
    }
  }
};
