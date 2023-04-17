const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arr1 = arr.filter((el) => el != -1);

  arr1.sort((a, b) => a - b);
let index = []
let exception = -1

  for (let i = 0; i < arr.length; i++) {
      if(arr[i] === exception){
        arr1.splice(i, 0, -1);
        
       
				}	
  	      
} return arr1
}

module.exports = {
  sortByHeight
};
