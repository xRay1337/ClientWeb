(function () {
    var array = [4, 8, 15, 16, 23, 42, 85, 168, 337, 672, 1345, 2688, 5377, 10752];
    console.log("Create array: " + array);

    array.sort(function (e1, e2) {
        return e2 - e1;
    })
    console.log("Sort array: " + array);

    var firstFiveElementsOfAnArray = array.slice(0, 5);
    console.log("First five elements of an array: " + firstFiveElementsOfAnArray);

    var lastFiveElementsOfAnArray = array.slice(array.length - 5);
    console.log("Last five elements of an array: " + lastFiveElementsOfAnArray);

    var sumOfEvenElements = array.reduce(function (sum, currentElement) {

        if (currentElement % 2 === 0) {
            sum += currentElement;
        }

        return sum;
    })
    console.log("The sum of the even elements of the array: " + sumOfEvenElements);
}
)();

(function () {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }

    var squaresOfEvenNumbers = array
        .filter(e => e % 2 == 0)
        .map(e => Math.pow(e, 2));

    console.log("Squares of even numbers in an array: " + squaresOfEvenNumbers);
}
)();