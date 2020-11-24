
function myFunctionTest() {
  console.log("Hello from my module");
}

var testAAA = { test: "asdas", auto: { test: { aa: "sadas" } } }
let { auto: { test }} = testAAA



export const myConst = "myCOnst";
export default { myFunctionTest , aaa: myConst}
