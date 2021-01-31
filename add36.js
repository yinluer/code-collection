const alphabet = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];


function add_36(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let i = len1 - 1;
  let j = len2 - 1;
  let res = '';
  let carry = 0;
  while (i >= 0 && j >=0) {
    let sum = alphabet.indexOf(str1[i]) + alphabet.indexOf(str2[j]) + carry;
    if (sum >= 36) {
      res = alphabet[sum % 36] + res;
      carry = 1;
    } else {
      res = alphabet[sum] + res;
      carry = 0;
    }
    i--;
    j--;
  }
  while (i >= 0) {
    let sum = alphabet.indexOf(str1[i]) + carry;
    if (sum >= 36) {
      res = alphabet[sum % 36] + res;
      carry = 1;
    } else {
      res = alphabet[sum] + res;
      carry = 0;
    }
    i--;
  }
  while (j >= 0) {
    let sum = alphabet.indexOf(str2[j]) + carry;
    if (sum >= 36) {
      res = alphabet[sum % 36] + res;
      carry = 1;
    } else {
      res = alphabet[sum] + res;
      carry = 0;
    }
    j--;
  }
  if (carry > 0) {
    res = '1' + res;
  }
  return res;
}

// console.log(add_36('A1', 'A1'));