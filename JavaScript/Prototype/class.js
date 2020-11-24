// Object Create API
function createUser(name, points) {
  let newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.points = points;
  return newUser;
}

let userFunction = {
  increment: function () { this.points++ },
  login: function () { console.log("Please login.") }
}

let user1 = createUser("Arnold", 25);
user1.increment();

// Prototype API v1
function User(name, points) {
  this.name = name;
  this.points = points;
}
User.prototype.increment = function () {
  this.points++;
}
User.prototype.login = function () {
  console.log("Please login.")
}

let user1 = new User("Arnold", 25);
user1.increment();

// Prototype API v2
function User(name, points) {
  this.name = name;
  this.points = points;
  this.increment = function () {
    this.points++;
  }
  this.login = function () {
    console.log("Please login.")
  }
}
let user1 = new User("Arnold", 25);
user1.increment();

// ES6 class + constructor
class User {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
  increment() {
    this.points++;
  }
  login() {
    console.log("Please login.")
  }
}

class Manager extends User {
  constructor({ name, points, budget }) {
    super(name, points)
    this.budget = budget
  }
}



let user1 = new User("Arnold", 25);
user1.increment();

let user1 = new Manager({ name: "Jozo", points: 44, budget: 100000 });
user1.increment();
