// Write a recursive function to count the number of digits in a given number N.

function digitCount(n){
    if(n===0) return 0

    return 1 + digitCount(Math.floor(n/10))
}

console.log(digitCount(1234));
