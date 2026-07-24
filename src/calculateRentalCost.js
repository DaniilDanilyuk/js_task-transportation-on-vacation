/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let sum = days * PRICE_PER_DAY;

  if (days >= 7) {
    sum -= LONG_TERM_DISCOUNT;

    return sum;
  }

  if (days >= 3) {
    sum -= SHORT_TERM_DISCOUNT;

    return sum;
  }

  return sum;
}

module.exports = calculateRentalCost;
