import { myConst } from "./myFirstModule.js";


import myModuel from "./myFirstModule.js";

myModuel.myFunctionTest();

export const name = {hello: 'hello'};

export function sayHello() {
  console.log("Hello");
}

let myObject = { newName: name, sayHello };

name["myProp"] = "asdas"

export default myObject

//js anonymous object
// { name, sayHello }
// C# anonymous object
// new { name = name, sayHello = sayHello }
