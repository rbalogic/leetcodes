/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const numsSet1 = [...s1];
  const numsSet2 = [...s2];
  let minArray = numsSet1;
  let maxArray = numsSet2;

  if (numsSet1.length > numsSet2.length) {
    minArray = numsSet2;
    maxArray = numsSet1;
  }

  const finalArray = minArray.filter((element) => maxArray.includes(element));
  console.log(finalArray);
  return finalArray;
};

intersection([4, 9, 5], [9, 4, 9, 8, 4]);

/**
 * to gain the expected results
 * first we need to remove the duplicate elemetns from each array (for easier runtime)
 * then filter out the elements that are present in the other array
 */
