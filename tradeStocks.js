/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  console.log(profit);
  return profit;
};

maxProfit([7, 6, 4, 3, 1]);
