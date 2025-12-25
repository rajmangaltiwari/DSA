// Array methods practice questions

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

console.log(companies)
// 1 Remove the first company from array
console.log(companies.shift());

// 2 Remove Uber and add Ola in it's place

console.log(companies.splice(1,1,"Ola"));

// 3 Add Amazon at the end of the array

console.log(companies.push("Amezon"))
console.log(companies);
