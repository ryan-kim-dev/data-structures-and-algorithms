function collectEvenNums(arr) {
  let result = [];

  function helper(changingInput) {
    if (changingInput.length === 0) return;

    if (changingInput[0] % 2 === 0) {
      result.push(changingInput[0]);
    }

    helper(changingInput.slice(1));
  }

  helper(arr);

  return result;
}

const arrInGlobal = [1, 2, 3, 4, 5, 6];

collectEvenNums(arrInGlobal); // [2, 4, 6]
