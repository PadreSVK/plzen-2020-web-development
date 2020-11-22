var foo = 1;
var bar = 0;
var baz = 2;
foo || bar ; // returns 1 , which is true
bar || foo ; // returns 1 , which is true
foo && bar ; // returns 0 , which is false
foo && baz ; // returns 2 , which is true
baz && foo ; // returns 1 , which is true