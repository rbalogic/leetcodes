/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let finalArray = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
      finalArray.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i]) || nums3.includes(nums2[i])) {
      finalArray.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (nums1.includes(nums3[i]) || nums2.includes(nums3[i])) {
      finalArray.push(nums3[i]);
    }
  }
  console.log([...new Set(finalArray)]);
  return [...new Set(finalArray)];
};

twoOutOfThree([1, 1, 3, 2], [2, 3], [3]);
