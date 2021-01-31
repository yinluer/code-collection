Function.prototype.bind2 = function(context) {
  let args = Array.prototype.slice.call(arguments, 1)
  const self = this;
  var fBound = function() {
    args = args.concat(Array.prototype.slice.call(arguments));
    return self.apply(this instanceof fBound ? this : context, args);
  }
  Object.setPrototypeOf(fBound.prototype, self.prototype);
  return fBound;
}

// function funA() {
//   this.a = 1;
// }
// funA.prototype.getA = function() {
//   console.log('function getA');
// }
// let F = funA.bind2({b:2});
// let funB = new F();
// funB.getA();
// console.log(funB, funB.__proto__);