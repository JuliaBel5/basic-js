const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
let chain = [];
const chainMaker = {
  getLength() {
    return chain.length;
  },

  addLink(value) {
    chain.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position > 0 && position <= chain.length) {
      chain.splice(position - 1, 1);
    } else {
      chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return chainMaker;
  },
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let resultingChain = chain.join("~~");
    chain = [];
    return resultingChain;
  },
};

module.exports = {
  chainMaker,
};
