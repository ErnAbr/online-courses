"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(n) {
        this.age = 30;
        if (n)
            this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name)
            console.log(phrase + " " + this.name);
        else
            console.log("No Name Provided");
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("hello I am");
//# sourceMappingURL=app.js.map