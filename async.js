function timeout(ms) {
  return new Promise((resolve) => {
    resolve('timeout');
  });
}

async function asyncPrint(value, ms) {
  const res = await timeout(ms);
  console.log('res', res);
  console.log(value);
}

asyncPrint('hello world', 50);



// async function timeout(ms) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
//   // timeout(ms).then(_=console.log(value))
// }

// asyncPrint('hello world', 5000);