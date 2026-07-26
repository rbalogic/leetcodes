/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const sortedIndices = [...indices].sort((a, b) => a - b);
  const splitString = s.split("");
  let newString = [];
  for (let i = 0; i < indices.length; i++) {
    newString.push(
      splitString[indices.findIndex((element) => element === sortedIndices[i])],
    );
  }
  console.log(newString.join(""));
  return newString.join("");
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

/**
 * mistakes: sort changes the array in places rather than ASsinging to a new value
 * rethink if sort is needed
 * solution:
 * sort, and split the string to convert into an array
 * iterate through the sortedindeices and construct the new arrays string
 * join the array to get the expected string.
 */
