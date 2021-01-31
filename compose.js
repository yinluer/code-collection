function compose(...funcs) {
  if (!funcs || funcs.length === 0) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

let a = arg => arg + ',hel';
let b = arg => arg + ',lo';
let c = arg => arg + ',world';
console.log(compose(a, b, c)('yj'));