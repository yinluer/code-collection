const alphabet = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// 10 -> 2
function baseConversion(num) {
  let res = '';
  while (num) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  return res;
}
console.log(baseConversion(8));

// 2 -> 10
function baseConversion1(num) {
  let str = String(num);
  let len = str.length;
  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    res += str[i] * Math.pow(2, len - i - 1);
  }
  return res;
}
console.log(baseConversion1(11));

// 10 -> 36
function baseConversion2(num) {
  let res = '';
  while (num) {
    res = alphabet[num % 36] + res;
    num = Math.floor(num / 36);
  }
  return res;
}
console.log(baseConversion2(99));
