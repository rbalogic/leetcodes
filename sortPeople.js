/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const sortedHeights = [...heights].sort((a, b) => b - a);
  const sortedNames = [];
  for (let i = 0; i < sortedHeights.length; i++) {
    sortedNames.push(
      names[heights.findIndex((element) => element === sortedHeights[i])],
    );
  }
  return sortedNames;
};

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
