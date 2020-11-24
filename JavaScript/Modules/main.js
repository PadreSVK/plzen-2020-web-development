
//static import
import { draw as squareDraw, name } from './modules/square.js';
import hello from './modules/hello.js';

// import { default as hello } from './modules/hello.js';
// import { name as HelloName } from './modules/hello.js';

// import { name as helloName, sayHello} from './modules/hello.js';

console.log(name)
console.log(hello.name)



async function buttonClick() {
  //dynamic import
  const dynamicModule = await import("./modules/dynamicModule.js")

  var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    address: {
      street: "hybesova",
      number: 55555,
    },
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };

  dynamicModule.helloFromDynamicModule({ user: person, postion: "admin" });

}

const button = document.getElementById("testAsyncButton");
button.addEventListener("click", buttonClick)
