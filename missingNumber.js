/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const numsLength = nums.length;
  let missingNums = [];
  for (let index = 0; index <= numsLength; index++) {
    if (!nums.includes(index)) {
      missingNums.push(index);
    }
  }
  console.log(missingNums[0]);
  return missingNums[0];
};

missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
