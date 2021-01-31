function after(n, func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  n = n || 0
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

let fn = after(3, () => {console.log('finish')});
fn();
fn();
fn();
fn();