(function () {
    var countries =
        [{
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3644826
                },
                {
                    name: "Hamburg",
                    population: 1841179
                },
                {
                    name: "Munich",
                    population: 1456039
                },
                {
                    name: "Cologne",
                    population: 1061000
                }
            ]
        },
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12692466
                },
                {
                    name: "St. Petersburg",
                    population: 5392992
                },
                {
                    name: "Novosibirsk",
                    population: 1618039
                }
            ]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "New York City",
                    population: 8405837
                },
                {
                    name: "Los Angeles",
                    population: 3990456
                },
                {
                    name: "Chicago",
                    population: 2716000
                },
                {
                    name: "Washington",
                    population: 705749
                },
                {
                    name: "Boston",
                    population: 694583
                }
            ]
        }]

    console.log(countries);

    function GetCountryWithMaxNumberOfCities(array) {
        var maxNumberOfCities = 0;
        var countries = [];

        array.forEach(function (element) {
            if (element.cities.length > maxNumberOfCities) {
                maxNumberOfCities = element.cities.length;
            }
        });

        //Можно так, но прежний код лаконичнее
        //countries = array.filter(function (elem) {
        //    return elem.cities.length === maxNumberOfCities;
        //}).map(function (item) {
        //    return item.name;
        //});

        array.forEach(function (element) {
            if (element.cities.length === maxNumberOfCities) {
                countries.push(element.name);
            }
        });

        return countries;
    }

    console.log("Country with max number of cities: " + GetCountryWithMaxNumberOfCities(countries));

    function GetCountryPopulation(array) {
        var countriesWithPopulation = {};

        array.forEach(function (element) {
            countriesWithPopulation[element.name] = element.cities.reduce(function (total, city) {
                return total + city.population;
            }, 0);
        });

        return countriesWithPopulation;
    }

    console.log("Country with population:");
    console.log(GetCountryPopulation(countries));
})();