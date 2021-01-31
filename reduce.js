function filter(arr) {
  return arr.reduce((t,v) => v > 1 ? [...t, v] : t, []);
}
console.log(filter([-1,0,1,3,4]));

function flat(arr) {
  return arr.reduce((t,v) => t.concat(Array.isArray(v) ? flat(v) : v), []);
}
console.log(flat([1,[2,3],[4,[5,6,[7]]]]));