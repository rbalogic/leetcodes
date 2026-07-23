/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

merge([3, 1, 3], 1, [0], 2);

/**
 * solution:
 * use .length with m and trim the array to whatever length we want
 * then merge the nums1 and num2 into num1 using .push
 * once merged sort using (a,b) => a-b, flip the positions to sort in descending order
 */
