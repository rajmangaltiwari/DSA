// Linear search in an array
// find 15
let numbers = [10,23,45,70,11,15,90,34,22];

let target = 15
function findIndex(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(numbers,22 )); // 5