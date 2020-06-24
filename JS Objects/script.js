(function () {
    var Germany = {
        "name": "Germany",
        "cities": [
            {
                "name": "Berlin",
                "population": 3644826
            },
            {
                "name": "Hamburg",
                "population": 1841179
            },
            {
                "name": "Munich",
                "population": 1456039
            },
            {
                "name": "Cologne",
                "population": 1061000
            }
        ]
    }
    var Russia = {
        "name": "Russia",
        "cities": [
            {
                "name": "Moscow",
                "population": 12692466
            },
            {
                "name": "St. Petersburg",
                "population": 5392992
            },
            {
                "name": "Novosibirsk",
                "population": 1618039
            }
        ]
    }
    var USA = {
        "name": "USA",
        "cities": [
            {
                "name": "New York City",
                "population": 8405837
            },
            {
                "name": "Los Angeles",
                "population": 3990456
            },
            {
                "name": "Chicago",
                "population": 2716000
            },
            {
                "name": "Washington",
                "population": 705749
            },
            {
                "name": "Boston",
                "population": 694583
            }
        ]
    }

    var countries = [Germany, Russia, USA];

    console.log(countries);

    function getCountryWithMaxNumberOfCities(array) {
        var maxNumberOfCities = 0;
        var countries = [];

        array.filter(e => {
            if (e.cities.length > maxNumberOfCities) {
                maxNumberOfCities = e.cities.length;
            }
        });

        array.forEach(e => {
            if (e.cities.length === maxNumberOfCities) {
                countries.push(e.name)
            }
        });

        return countries;
    }

    console.log("Country with max number of cities: " + getCountryWithMaxNumberOfCities(countries));

    function getCountryPopulation(array) {
        var countriesWithPopulation = [];

        for (var i = 0; i < array.length; i++) {
            countriesWithPopulation[i] = {
                "name": array[i].name,
                "population": array[i].cities.reduce((total, city) => total + city.population, 0)
            };
        };

        return countriesWithPopulation;
    }

    var countryAndPopulation = getCountryPopulation(countries);

    console.log("Country with population:");

    countryAndPopulation.forEach(e => {
        console.log(e.name + " : " + e.population);
    })
})();