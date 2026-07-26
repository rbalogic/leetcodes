/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  const words = s.split(" ");
  words.length = k;
  return words.join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4));
