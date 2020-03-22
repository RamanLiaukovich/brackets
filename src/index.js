module.exports = function check(str, bracketsConfig) {
  
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let index = bracketsConfig.flat().indexOf(str[i]);
    let index1 = bracketsConfig.flat().indexOf(str[i], index + 1);
    if (index !== -1 && index1 === -1) {
      if (index % 2 === 0) {
        stack.push(str[i]);
      } else if (bracketsConfig.flat().indexOf(stack[stack.length - 1]) === index - 1) {
        stack.pop();
      }
    if (index1 !== -1) {
      if (index % 2 === 0) {
        stack.push(str[i]);
      } else if (bracketsConfig.flat().indexOf(stack[stack.length - 1]) === index1 - 1 && (index1 % 2 !== 0)) {
        stack.pop();
      }
    }
   
      // else 
      // } else if (index1 !== -1 && bracketsConfig.flat().indexOf(stack[stack.length - 1]) === (index1 - 1)) {
      //   stack.pop();
      // } 
      // if (stack.pop() !== undefined) {
      //   return true;
      // } else return false;
    // }
    // if 
    // return false;
  } 
  }
  if (stack.length !== 0) return false;
    else return true;
}
