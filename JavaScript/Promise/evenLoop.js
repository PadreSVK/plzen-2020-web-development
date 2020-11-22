var test = 55;

function testEventLoop() {
  console.log("before setTimeout");
  setTimeout(() => {
    console.log("after real Timeout")
    console.log(test)
  }, 5000)
  console.log("after calling setTimeout");
}

console.log("before testEventLoop");
testEventLoop();
console.log("after testEventLoop");
console.log(test)
test = 66666;
