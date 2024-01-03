// //Creating Empty object
// let person = {};
// console.log(person);

// // Adding the properties to person object
// person = {
//     name: 'John',
//     age: 30,
//     city:'New York'
// }
// console.log(person);

// // Remove age property from the person object
// delete person.age;
// console.log(person);

// // Update the city value
// person.city='San Francisco';
// console.log(person);

// Creating Empty Array
let cars = [];
console.log(cars);

// Adding the properties to person object
cars = [
    {make: 'Toyota' , model: 'Camry' , year: 2018},
    {make: 'TATA' , model: 'Nexon' , year: 2019},
    {make: 'Maruti' , model: 'Brezza' , year: 2020}
]
console.log(cars);
// Removing the first car object form the cars array
console.log(cars.shift());
console.log(cars);
// Add new car object to the car
cars.push({make: 'Honda' , model: 'Civic' , year: 2020})
console.log(cars);
//Update the model property of the second car
cars[1].model= 'arjun';
console.log(cars);



