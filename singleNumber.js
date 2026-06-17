/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numbers = nums;
  let uniqueElements = [];
  let duplicateElements = [];
  if (numbers.length === 1) {
    return numbers[0];
  }
  numbers.forEach((item) => {
    if (uniqueElements.length === 0) {
      uniqueElements.push(item);
    } else if (uniqueElements.includes(item)) {
      duplicateElements.push(item);
    } else {
      uniqueElements.push(item);
    }
  });
  const finalElement = uniqueElements.filter(
    (e) => !duplicateElements.includes(e),
  );
  return finalElement[0];
};

singleNumber([3, 3, 5, 5, 1]);
