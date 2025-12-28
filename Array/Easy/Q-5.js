// find min max in array
let arr = [12, 3, 5, 7, 19, -1, 0, 34, 2];

let k = arr[0]; // Initialize min to first element
let j = arr[0]; // Initialize max to first element

for(let i = 1; i < arr.length; i++){
    // Check for minimum
    if(arr[i] < k) k = arr[i];
    
    // Check for maximum
    if(arr[i] > j) j = arr[i];
}
console.log(k);
console.log(j);
