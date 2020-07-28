(function () {
    var peoples = [
        { age: 18, name: "Alexandr", lastName: "Poligalov" },
        { age: 19, name: "Victor", lastName: "Lobachov" },
        { age: 20, name: "Vitaliy", lastName: "Zlobin" },
        { age: 21, name: "Stepan", lastName: "Chepurin" },
        { age: 22, name: "Roman", lastName: "Zlobin" },
        { age: 23, name: "Sergey", lastName: "Tarasenco" },
        { age: 24, name: "Dmitriy", lastName: "Tarasenco" },
        { age: 25, name: "Pavel", lastName: "Slepchov" },
        { age: 35, name: "Artem", lastName: "Zidlaev" },
        { age: 36, name: "Igor", lastName: "Lepehin" }
    ];

    var averageAge = _.chain(peoples)
        .pluck("age")
        .reduce(function (acc, current) {
            return acc + current;
        }, 0)
        .value() / peoples.length;

    console.log("Средний возраст: " + averageAge);

    var twenties = _.chain(peoples)
        .filter(function (p) {
            return p.age >= 20 && p.age <= 30;
        })
        .sortBy("age")
        .value();

    console.log("Люди от 20 до 30:");
    _.each(twenties, console.log);

    _.each(peoples, function (element) {
        element.fullName = element.name + " " + element.lastName;
    });

    console.log("Люди с полными именами:");
    _.each(peoples, console.log);
})();