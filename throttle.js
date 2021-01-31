function throttle(fn, delay) {
  let timer;
  return function() {
    let _this = this;
    let args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function(){
      fn.apply(_this, args);
      timer = null;
    }, delay)
  }
}
// const log = throttle(()=>{console.log(11)}, 5000);
// setInterval(log, 100);