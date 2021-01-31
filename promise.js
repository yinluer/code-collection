Promise.all = function(arr) {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(res => {
        result.push(res);
        if (result.length === i + 1) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      })
    }
  })
}

Promise.allSettled = function(promiseArr = []) {
  if (!promiseArr || !promiseArr.length) {
    return Promise.resolve([]);
  }
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).finally(res => {
        result.push(res);
        if (result.length === i + 1) {
          resolve(result);
        }
      })
    }
  })
}

const formatSettledResult = (success, value) =>
  success
    ? { status: "fulfilled", value }
    : { status: "rejected", reason: value };

Promise.allSettled = function(iterators) {
  const promises = Array.from(iterators);
  const num = promises.length;
  const settledList = new Array(num);
  let settledNum = 0;

  return new Promise(resolve => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          settledList[index] = formatSettledResult(true, value);
          if (++settledNum === num) {
            resolve(settledList);
          }
        })
        .catch(error => {
          settledList[index] = formatSettledResult(false, error);
          if (++settledNum === num) {
            resolve(settledList);
          }
        });
    });
  });
};

Promise.prototype.finally = Promise.prototype.finally || function (callback) {
  const P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason; })
  );
};