

const truthyVar0 = "0";
const truthyVar1 = "any string";
const truthyVar2 = []; // an empty array
const truthyVar3 = { }; // an empty object
const truthyVar4 = 1; // any non - zero number

if (truthyVar0) {
    console.log("Truthy")
}
if (truthyVar1) {
    console.log("Truthy")
}
if (truthyVar2) {
    console.log("Truthy")
}
if (truthyVar3) {
    console.log("Truthy")
}
if (truthyVar4) {
    console.log("Truthy")
}


const falsyVar0 = 0;
const falsyVar1 = " "; // an empty string
const falsyVar2 = NaN ; // JavaScript ’s ”not -a- number ” variable
const falsyVar3 = null ;
const falsyVar4 = undefined ; // be careful -- undefined can be redefined !


if (falsyVar0) {
    console.log("Falsy")
}
if (falsyVar1) {
    console.log("Falsy")
}
if (falsyVar2) {
    console.log("Falsy")
}
if (falsyVar3) {
    console.log("Falsy")
}
if (falsyVar4) {
    console.log("Falsy")
}

