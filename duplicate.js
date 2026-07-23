/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hasDuplicate = false;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      hasDuplicate = true;
    }
  }
  console.log(hasDuplicate);
  return hasDuplicate;
};

containsDuplicate([1, 2, 3, 4]);

/**
 * solution
 * sort the array
 * initiate a boolean with default false
 * if any number and the next number are the same, we got the answer
 * set boolean to true
 * once for loop completes return the boolean
 */
