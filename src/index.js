import Stack from './stack';

console.log('wy->', new Stack());

// 利用栈十进制转二进制
function dec2bin(decNum) {
  const stack = new Stack();
  while (decNum > 0) {
    // 将余数压入栈
    stack.push(decNum % 2);
    // 将计算后的整数作为下一次运行的数字
    decNum = Math.floor(decNum / 2);
  }
  var result = '';
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

console.log('wy->', dec2bin(10));
console.log('wy->', dec2bin(100));
console.log('wy->', dec2bin(4));
