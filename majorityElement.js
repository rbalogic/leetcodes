/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums[Math.floor(nums.length / 2)]);
  return nums[Math.floor(nums.length / 2)];
};

majorityElement([6, 6, 6, 7, 7]);

/**
 * solution
 * sorts the array
 * since the majority number is more than half of the array it is very to easy to
 * locate the middle element whcih will be the majority number
 */
