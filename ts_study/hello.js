var greet = function (person, date) {
    console.log("Hello ".concat(person, ", ").concat(date.toDateString()));
};
greet("YS", new Date());
