const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i += 1) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        let keyCharCode = key.charCodeAt(keyIndex++ % key.length);
        let resultCharCode = ((charCode - 65 + (keyCharCode - 65)) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(encrMess, key) {
    if (!encrMess || !key) {
      throw new Error("Incorrect arguments!");
    }

    encrMess = encrMess.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < encrMess.length; i++) {
      let charCode = encrMess.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        let keyCharCode = key.charCodeAt(keyIndex++ % key.length);
        let resultCharCode = ((charCode - keyCharCode + 26) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
      } else {
        result += encrMess[i];
      }
    }
    if (this.direct) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
