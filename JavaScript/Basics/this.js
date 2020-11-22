var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};


//call
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var person2 = {
    firstName: "John",
    lastName: "Doe",
}

person1.fullName.call(person2);  // Will return "John Doe"



//apply
var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);

//call
var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");


//call with object deconstruct

var person = {
    fullName: function ({city, country}) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
person.fullName.call(person1, {city:"Oslo", country:"Norway"});