/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
  let switchedOn = [];
  let switchedOff = [];
  for (let i = 0; i < bulbs.length; i++) {
    if (switchedOff.includes(bulbs[i])) {
      switchedOn.push(bulbs[i]);
      switchedOff.splice(switchedOff.indexOf(bulbs[i]), 1);
    } else {
      switchedOff.push(bulbs[i]);
      switchedOn.splice(switchedOn.indexOf(bulbs[i]), 1);
    }
  }
  return switchedOff.sort((a, b) => a - b);
};

console.log(toggleLightBulbs([100, 100]));
