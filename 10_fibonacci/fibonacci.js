const fibonacci = function(n) {
    n = Number(n);
    let fib0 = 0;
    let fib1 = 1;

    if(n < 0) {
        return "OOPS";
    }

    for(let i = 2; i <= n; i++){
        let nextFib = fib0 + fib1;
        fib0 = fib1;
        fib1 = nextFib;
    }
    return (n === 0) ? fib0 : fib1;
};

// Do not edit below this line
module.exports = fibonacci;
