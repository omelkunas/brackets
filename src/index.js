module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};

  for(item of bracketsConfig) {
    openBrackets.push(item[0]);
    bracketsPair[[item[1]]] = item[0];
  }

  function isBracketsOk(str) {
    let stack = [];

    for(let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if(openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if(stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if(bracketsPair[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      } 
    }
    return stack.length === 0;
  }

  return isBracketsOk(str);
}

// doesn't work for cases like '||' where opener === closer
// same with numbers ['7', '7'], ['8', '8']