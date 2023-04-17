const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {

  if (!options) {
    return str
  }
if (typeof str != "string") {
  String(str)
}
if( typeof options.addition != "string") {
  String(options.addition)
}

if (!options.repeatTimes) {
  options.repeatTimes = 1;
}
if (!options.additionRepeatTimes) {
  options.additionRepeatTimes = 1
} 
if (!options.separator) {
  options.separator = '+';
}

if (!options.additionSeparator) {
  options.additionSeparator = '|';
}

if (typeof options.addition === 'undefined') {
  options.addition = '';
}
 
const targetStr = (((str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)).slice(0, -options.additionSeparator.length)) + options.separator).repeat(options.repeatTimes)).slice(0, -(options.separator.length))

 return targetStr
}

module.exports = {
  repeater
};
