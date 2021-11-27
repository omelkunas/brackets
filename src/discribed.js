function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};

  for(item of bracketsConfig) {
    openBrackets.push(item[0]);
    bracketsPair[[item[1]]] = item[0];
  }

  console.log('openBrackets is ', openBrackets);
  console.log('bracketsPair', bracketsPair);
  console.log('\n');

  function isBracketsOk(str) {
    let stack = [];

    for(let i = 0; i < str.length; i++) {
      console.log('i is ', i);
      let currentSymbol = str[i];
      console.log('currentSymbol is ', currentSymbol)

      if(openBrackets.includes(currentSymbol)) {
        console.log('push currentSymbol to stack')
        stack.push(currentSymbol);
        console.log('stack is ', stack);
      } else {
        if(stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];
        console.log('topElement is', topElement);
        console.log('delete element? ', bracketsPair[currentSymbol] === topElement);

        if(bracketsPair[currentSymbol] === topElement) {
          stack.pop();
          console.log('stack is ', stack);
        } else {
          return false;
        }
      } 
      console.log('\n');
    }

    return stack.length === 0;
  }

  console.log(isBracketsOk(str));

}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6));