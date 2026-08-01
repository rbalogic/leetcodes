/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let itExists = false;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 0 &&
      arr.findLastIndex((element) => element === arr[i]) !== i
    ) {
      itExists = true;
    }
    if (arr[i] !== 0 && arr.includes(arr[i] / 2)) {
      console.log("set from division");
      itExists = true;
    }
  }
  return itExists;
};

console.log(checkIfExist([0, -2, 2]));
