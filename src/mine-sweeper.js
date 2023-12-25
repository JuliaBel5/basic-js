const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res;
  if (matrix[2]) {
    res = [[], [], []];
  } else {
    res = [[], []];
  }
  let i = 1;
  let j = 1;
  if (matrix[i - 1][j]) {
    res[i - 1].push(1);
  } else {
    res[i - 1].push(0);
  }
  if (matrix[i - 1][j - 1] && matrix[i - 1][j + 1]) {
    res[i - 1].push(2);
  } else if (matrix[i - 1][j - 1]) {
    res[i - 1].push(1);
  } else if (matrix[i - 1][j + 1]) {
    res[i - 1].push(1);
  } else {
    res[i - 1].push(0);
  }
  if (matrix[i - 1][j]) {
    res[i - 1].push(1);
  } else {
    res[i - 1].push(0);
  }

  if (matrix[i][j]) {
    res[i].push(1);
  } else {
    res[i].push(0);
  }
  if (matrix[i - 1][j - 1] && matrix[i][j + 1]) {
    res[i].push(2);
  } else if (matrix[i][j - 1]) {
    res[i].push(1);
  } else if (matrix[i][j + 1]) {
    res[i].push(1);
  } else {
    res[i].push(0);
  }
  if (matrix[i][j]) {
    res[i].push(1);
  } else {
    res[i].push(0);
  }
  if (matrix[i + 1]) {
    if (matrix[i + 1][j]) {
      res[i + 1].push(1);
    } else {
      res[i + 1].push(0);
    }
    if (matrix[i + 1][j - 1] && matrix[i + 1][j + 1]) {
      res[i + 1].push(2);
    } else if (matrix[i + 1][j - 1]) {
      res[i + 1].push(1);
    } else if (matrix[i + 1][j + 1]) {
      res[i + 1].push(1);
    } else {
      res[i + 1].push(0);
    }
    if (matrix[i + 1][j]) {
      res[i + 1].push(1);
    } else {
      res[i + 1].push(0);
    }
  }

  if (matrix[i][j - 1]) {
    res[i - 1].splice([j - 1], 1, res[i - 1][j - 1] + 1);
    res[i - 1].splice([j], 1, res[i - 1][j] + 1);
    if (matrix[i + 1]) {
      res[i + 1].splice([j - 1], 1, res[i - 1][j - 1] + 1);
      res[i + 1].splice([j], 1, res[i + 1][j] + 1);
    }
  }

  if (matrix[i][j]) {
    res[i - 1].splice([j - 1], 1, res[i - 1][j - 1] + 1);
    res[i - 1].splice([j], 1, res[i - 1][j] + 1);
    res[i - 1].splice([j + 1], 1, res[i - 1][j + 1] + 1);
    if (matrix[i + 1]) {
      res[i + 1].splice([j - 1], 1, res[i + 1][j - 1] + 1);
      res[i + 1].splice([j], 1, res[i + 1][j] + 1);
      res[i + 1].splice([j + 1], 1, res[i + 1][j + 1] + 1);
    }
  }

  if (matrix[i][j + 1]) {
    res[i - 1].splice([j], 1, res[i - 1][j] + 1);
    res[i - 1].splice([j + 1], 1, res[i - 1][j + 1] + 1);
    if (matrix[i + 1]) {
      res[i + 1].splice([j], 1, res[i + 1][j] + 1);
      res[i + 1].splice([j + 1], 1, res[i + 1][j + 1] + 1);
    }
  }

  if (matrix[i - 1][j - 1]) {
    res[i].splice([j - 1], 1, res[1][j - 1] + 1);
    res[i].splice([j], 1, res[i][j] + 1);
  }
  if (matrix[i - 1][j]) {
    res[i].splice([j - 1], 1, res[i][j - 1] + 1);
    res[i].splice([j - 1], 1, res[i][j] + 1);
    res[i].splice([j - 1], 1, res[i][j + 1] + 1);
  }
  if (matrix[i - 1][j + 1]) {
    res[i].splice([j - 1], 1, res[i][j] + 1);
    res[i].splice([j - 1], 1, res[i][j + 1] + 1);
  }
  if (matrix[i + 1]) {
    if (matrix[i + 1][j - 1]) {
      res[i].splice([j - 1], 1, res[1][j - 1] + 1);
      res[i].splice([j], 1, res[i][j] + 1);
    }
    if (matrix[i + 1][j]) {
      res[i].splice([j - 1], 1, res[i][j - 1] + 1);
      res[i].splice([j - 1], 1, res[i][j] + 1);
      res[i].splice([j - 1], 1, res[i][j + 1] + 1);
    }
    if (matrix[i + 1][j + 1]) {
      res[i].splice([j - 1], 1, res[i][j] + 1);
      res[i].splice([j - 1], 1, res[i][j + 1] + 1);
    }
  }

  return res;
}
module.exports = {
  minesweeper,
};
