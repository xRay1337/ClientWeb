(function () {
    var array = [4, 8, 15, 16, 23, 42, 85, 168, 337, 672, 1345, 2688, 5377, 10752];
    console.log("Create array: " + array);

    array.sort(function (e1, e2) {
        return e2 - e1;
    });
    console.log("Sort array: " + array);

    var firstFiveElements = array.slice(0, 5);
    console.log("First five elements of an array: " + firstFiveElements);

    var lastFiveElements = array.slice(array.length - 5);
    console.log("Last five elements of an array: " + lastFiveElements);

    var evenElementsSum = array.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }

        return sum;
    }, 0);

    console.log("The sum of the even elements of the array: " + evenElementsSum);
})();

(function () {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }

    var evenNumberSquares = array
        .filter(function (element) {
            if (element % 2 === 0) {
                return true;
            }

            return false;
        })
        .map(function (element) {
            return Math.pow(element, 2);
        });

    console.log("Squares of even numbers in an array: " + evenNumberSquares);
})();