function deepClone(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}
// console.log(deepClone({name:1, sex:{age:2}}));