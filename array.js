// Creating Empty array
let fruits = [];
console.log(fruits);

// adding fruits to empty array
fruits.push('apple','banana','orange');
console.log(fruits);

// Remove the first fruit from the array
let fruit = fruits.splice(1,3);
console.log(fruit);

// Adding grap to the end of the arrry
fruit.push("grape");
console.log(fruit);

// Update the second fruit
fruit[1] = 'pear';
console.log(fruit);