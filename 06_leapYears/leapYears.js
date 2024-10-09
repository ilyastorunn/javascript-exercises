// divisible by 4 = leap
// divisible by 100 = not leap
// divisible by 400 = leap

const leapYears = (year) => {
    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;

    if (divisibleBy4 && !divisibleBy100) {
        return true
    } else if (divisibleBy4 && divisibleBy100 && divisibleBy400) {
        return true
    } else if (divisibleBy4 && divisibleBy100 && !divisibleBy400) {
        return false
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
