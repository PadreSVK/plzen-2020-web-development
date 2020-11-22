// Example using a function expression
function createObject() {
  console.log('Inside `createObject`:', this.foo);
  return {
    foo: 42,
    bar: function() {
      console.log('Inside `bar`:', this.foo);
    },
  };
}

createObject.call({foo: 21}).bar(); // override `this` inside createObject


// Example using a arrow function
function createObject() {
  console.log('Inside `createObject`:', this.foo);
  return {
    foo: 42,
    bar: () => console.log('Inside `bar`:', this.foo),
  };
}

createObject.call({foo: 21}).bar(); // override `this` inside createObject


// currently common pattern
var that = this;
getData(function(data) {
  that.data = data;
});

getdata = () => this.test
// better alternative with arrow functions
getData(data => {
  this.data = data;
});
