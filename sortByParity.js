/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let oddArray = [];
  let evenArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArray.push(nums[i]);
    } else {
      oddArray.push(nums[i]);
    }
  }
  return evenArray.concat(oddArray);
};

console.log(sortArrayByParity([0]));
