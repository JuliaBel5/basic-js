const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let s = String(n);
   
if (s.length === 2) {
  if (s[0] < s[1]) {
    return Number(s[1])
} else {
  return Number(s[0])
}
} else if (s[0] < s[1]) {
      return Number(s.slice(1, s.length))

 } else {
 
  for (i = 0; i < s.length-1; i++) {
   
	 if (s[i] < s [i+1]){
   return(Number(s.slice(0, i) + s.slice(i+1)))
 
  }
}
}
}



module.exports = {
  deleteDigit
};
