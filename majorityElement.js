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
