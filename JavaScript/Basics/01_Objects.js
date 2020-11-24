// v1
var myObject = {}
myObject.myprop1 = "Hi"
myObject.myprop2 = { propInProp: "value" }

function func(arg1) {
  console.log(this);
  return arg1 + this.myprop1
}
myObject.func = func.bind(myObject)

//v2
var myObject = {}
myObject["myprop1"] = "Hi"
myObject["myprop2"] = { propInProp: "value" }

function func(arg1) {
  return arg1 + this["myprop1"]
}
myObject["func"] = func.bind(myObject)

function addProperty(propName, propValue) {
  this[propName] = propValue
}

// v3
var myObject = {
  myprop1: "Hi",
  myprop2: {
    propInProp: "value"
  },
  func(arg1) {
    return arg1 + this.myprop1
  }
}

// result
//{myprop1: "Hi", myprop2: {…}, func: ƒ}
// func: ƒ func(arg1)
// myprop1: "Hi"
// myprop2:
//    propInProp: "value"
