/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[k] = nums[i];
      k++;
      console.log(nums);
    }
  }
  return k;
};

removeDuplicates([1, 1, 2]);

/** solution & approach
 * set a initial value k=0 which can be used to swal elements
 * iterate through the array and check for each element is similar to the next one
 * if diff swap the position with the position with k, because k holds the array index which is uniq.
 * increment k upon if condition true
 * return k
 */
