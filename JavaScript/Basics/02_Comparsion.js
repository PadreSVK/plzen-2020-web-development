
var foo = 1;
var bar = 0;
var baz = "1";
var bim = 2;

foo == bar; // returns false
foo != bar; // returns true
foo == baz;  // returns true ; careful !
foo === baz; // returns false
foo !== baz; // returns true
foo === parseInt(baz); // returns true
foo > bim; // returns false
bim > baz; // returns true
foo <= baz; // returns true
