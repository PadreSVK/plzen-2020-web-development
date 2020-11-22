
function myFunctionTest() {
  console.log("Hello from my module");
}

export const myConst = "myCOnst";

export default { myFunctionTest }


var testAAA = { test: "asdas", auto: { test: { aa: "sadas" } } }


let { auto: { test }} = testAAA
