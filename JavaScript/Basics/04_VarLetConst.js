// var keyword
var myObject = "";
if (true) {
    var myObject = "BBBBBBBBB" // error not throwed for redeclaration
}

function test() {
    var myObject = "AAAAAAAAA"
    console.log(myObject)
}

// let keyword
let myObject = "";
if (true) {
    let myObject = "BBBBBBBBB" // error throwed for redeclaration
}

function test() {
    let myObject = "AAAAAAAAA"
    console.log(myObject)
}

if (true) {
    myObject = "BBBBBBBBB" // this is ok
}

// const keyword
const myObject = "";
if (true) {
    const myObject = "BBBBBBBBB" // error throwed for redeclaration
}

function test() {
    var myObject = "AAAAAAAAA"
    console.log(myObject)
}

if (true) {
    myObject = "BBBBBBBBB" // error,  const
}
