/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let charIndex = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      charIndex.push(i);
    }
  }
  return charIndex;
};

console.log(findWordsContaining(["leet", "code"], "e"));

/**
 * solution:
 * iterate through the words
 * initialise a charIndex array
 * if each word includes x
 * push the index of the word to the charIdnex array
 */
