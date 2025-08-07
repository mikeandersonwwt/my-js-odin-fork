const leapYears = function(year) {
    // const isYearDivisibleByFour = year % 4 === 0;
    // const isCentury = year % 100 === 0;
    // const isYearDivisibleByFourHundred = year % 400 === 0;

    // if (
    //     isYearDivisibleByFour &&
    //     (!isCentury || isYearDivisibleByFourHundred)
    // ) {
    //     return true;
    // } else {
    //     return false;
    // }

    if (year % 4 === 0 && 
        (year % 400 === 0 || year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
