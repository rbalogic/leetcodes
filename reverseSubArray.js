/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const sortedTarget = target.sort((a, b) => a - b);
  const sortedArr = arr.sort((a, b) => a - b);

  return (
    sortedArr.length === sortedTarget.length &&
    sortedArr.every((val, index) => val === sortedTarget[index])
  );
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
