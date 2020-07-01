(function () {
    var Germany = {
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
    }
    var Russia = {
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
    }
    var USA = {
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
    }

    var countries = [Germany, Russia, USA];

    console.log(countries);

    function GetCountryWithMaxNumberOfCities(array) {
        var maxNumberOfCities = 0;
        var countries = [];

        array.forEach(function (element) {
            if (element.cities.length > maxNumberOfCities) {
                maxNumberOfCities = element.cities.length;
            }
        });

        array.forEach(function (element) {
            if (element.cities.length === maxNumberOfCities) {
                countries.push(element.name);
            }
        });

        return countries;
    }

    console.log("Country with max number of cities: " + GetCountryWithMaxNumberOfCities(countries));

    function GetCountryPopulation(array) {
        var countriesWithPopulation = [];

        array.forEach(function (element, index) {
            countriesWithPopulation[index] = {
                name : element.name,
                population : element.cities.reduce(function (total, city) {
                    return total + city.population;
                }, 0)
            };
        })

        return countriesWithPopulation;
    }

    var countryAndPopulation = GetCountryPopulation(countries);

    console.log("Country with population:");

    countryAndPopulation.forEach(function (element) {
        console.log(element.name + " : " + element.population);
    })
})();