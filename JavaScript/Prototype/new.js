var o = { a: 1 };

// o ---> o.__proto__      ---> o.__proto__.__proto__
// o ---> Object.prototype ---> null
var a = [];

// a ---> a.__proto__     ---> a.__proto__.__proto__ ---> a.__proto__.__proto__.__proto__
// a ---> Array.prototype ---> Object.prototype      ---> null
var f = function () {
  return "value";
}
// f ---> f.__proto__        ---> f.__proto__.__proto__ ---> f.__proto__.__proto__.__proto__
// f ---> Function.prototype ---> Object.prototype      ---> null






function Parent(arg) {
  // initialize all instance properties in the constructor
  this.parentProp = arg;

  this.parentFunction = function (arg1, arg2) {
    console.log(`Hello ${this.parentProp} + ${arg1} ${arg2} from parent`);
  }
}

function Child(arg1, arg2) {
  // call parent constructor -- like super() in other languages
  Parent.call(this, arg1); //

  // initialize all instance properties in the constructor
  this.childProp = arg2;

  this.childMethod = function () {
    console.log(`Hello ${this.childProp} + ${this.parentProp} from child`);
  }
}


const child = new Child("aaa", "bbb")
//Child {parentProp: "aaa", childProp: "bbb", parentFunction: ƒ, childMethod: ƒ}

child.childMethod()
// Hello bbb + aaa from child

child.parentFunction(10, 5)
// Hello aaa + 10 5 from parent


const myVar = { name: "Fero", age: 15, address: { street: "Hybesova" } }
