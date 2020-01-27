/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let newArray = array.slice();
    newArray.sort(function(a, b) {
        if (a.year < b.year) {return -1;}
        if (a.year > b.year) {return 1;}
        if (a.title < b.title) {return -1;}
        if (a.title > b.title) {return 1;}
    })
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct



function howManyMovies (array) {
    //console.log(movies);
    if (array == []) {
        return 0;
    }
    else {
        return array.filter(a => a.director === 'Steven Spielberg' && a.genre.includes('Drama')).length;
    }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    return [...array].sort((a,b) => a.title > b.title ? 1 : -1).slice(0,20).map(fish => fish.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// that was hard :D
function ratesAverage (array) {
    if (array.length === 0){return 0} else {
    let reduceThis = [];
    let checkRate = [...array].filter(element => element.rate).forEach(element => reduceThis.push(element.rate));
    let reduceThat = reduceThis.reduce((a,b) => a+b)/array.length;
    return Math.round(reduceThat * 100)/100;
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
