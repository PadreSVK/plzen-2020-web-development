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



function A (){
  console.log("A");
}
function B (){
  console.log("B");
}
function E (){
  F()
  console.log("E");
}
function F (){
  G()
  console.log("F");
}
function G (){
  console.log("G");
}

function C (callback){
  E()
  console.log(callback() + "C");
}
function D (){
  console.log("D");
}

// Blocking calls
A()
B()
C()
D()

// Async calls
A()
B()
setTimeout(C(c => 1), 0)
setTimeout(C(c => 2), 0)
setTimeout(C(c => 3), 0)
setTimeout(C(c => 4), 0)
D()


