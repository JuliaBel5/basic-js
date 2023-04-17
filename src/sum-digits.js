const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits( n) {

  let num = String(n);
  
  let sum = 0;
  let result = 0;

  function countSum(a) {
    for (let i = 0; i < a.length; i++) {
     
      sum = sum + Number(a[i])
      
     }//console.log (sum)
     return sum
    }
if (num.length === 1) {
 return n
} else {
  result = result + countSum(num)
  if ((String(result)).length > 1) {
    sum = 0;
    result = countSum(String(result))
    return result
}  return result
}
return result

} 

module.exports = {
  getSumOfDigits
};
