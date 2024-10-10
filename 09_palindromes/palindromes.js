const palindromes = function(str) {
    let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palindrome = cleanString.split('').reverse().join('');
    return cleanString === palindrome;
}

// Do not edit below this line
module.exports = palindromes;
