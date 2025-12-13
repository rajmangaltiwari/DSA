// Write a recursive function to find the Nth Fibonacci number.

function fib(n){
    if (n <= 1) return n
    return fib(n-1) + fib(n-2)
}
console.log(fib(5));
