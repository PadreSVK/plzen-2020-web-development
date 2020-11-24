


// Will be Error throwed?
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
})
  .catch(alert);



await new Promise(function (resolve, reject) {
  throw new Error("Whoops!");
  resolve("Hi from Promise")
}).catch(alert);
