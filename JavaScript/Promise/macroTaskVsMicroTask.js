
console.log('start');
setTimeout(function () {
  console.log('timeout finished');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise 1');
    return Promise.resolve()
  })
  .then(function () {
    console.log('promise 2');
  });

console.log('end');

// start
// end
// promise 1
// promise 2
// timeout finished


async function test(){
  await Promise.resolve();
  console.log('promise 1');
}
