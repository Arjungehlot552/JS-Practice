let arry = ["arjun" , "kunal"];
// console.log(arry.length);
// console.log(arry.indexOf("arjun"));
// console.log(arry.push(5));
console.log(arry);
// console.log(arry.unshift(10));
// console.log(arry);
// arry.pop();
// console.log(arry);
let uppercasearry = arry.map(element => element.toUpperCase());
let lovercasearry = arry.map(element => element.toLowerCase());
console.log(uppercasearry);
console.log(lovercasearry);


// Convert elements to uppercase
let originalArray = ["apple", "banana", "orange"];
let uppercasedArray = [];
originalArray.forEach(element => {
    uppercasedArray.push(element.toUpperCase());
});
console.log(uppercasedArray); // Output: ["APPLE", "BANANA", "ORANGE"]

// Convert elements to lowercase
let lowercasedArray = [];
originalArray.forEach(element => {
    lowercasedArray.push(element.toLowerCase());
});
console.log(lowercasedArray); // Output: ["apple", "banana", "orange"



// Convert elements to uppercase
// let originalArray = ["apple", "banana", "orange"];
// let uppercasedArray = [];
// for (let i = 0; i < originalArray.length; i++) {
    // uppercasedArray.push(originalArray[i].toUpperCase());
// }
// console.log(uppercasedArray); // Output: ["APPLE", "BANANA", "ORANGE"]

// Convert elements to lowercase
// let lowercasedArray = [];
// for (let i = 0; i < originalArray.length; i++) {
    // lowercasedArray.push(originalArray[i].toLowerCase());
// }
// console.log(lowercasedArray); // Output: ["apple", "banana", "orange"]
