// function average(a ,b, c) {
//     let average = (a+b+c) / 3;
//    console.log(average);
// }

// average(1, 2, 3);


// function myMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }


// let object = {
//     {
//         name  : "Arjun",
//         age : 20,
//     },
//     {
//         name  : "Karan",
//         age : 25,
//     },
// };

// console.log(object.name);

//   let time = setTimeout(() => {
//   console.log("This is my setTime Out function :")
// } , 2000);

// try {
//     console.log(a);
// } 
// catch (error) {
//     console.log("a is not defined please difine first" , error)
// }
// let myarr = {}; // Use an object instead of an array

// let keys = ['newKey1', 'newKey2', 'newKey3'];
// let values = ['newValue1', 'newValue2', 'newValue3'];

// for (let i = 0; i < keys.length; i++) {
//     myarr[keys[i]] = values[i]; // Assign key-value pairs to the object
// }

// console.log(myarr);
// Function to change all images to a specific image
// function changeImages() {
//     // Get the specific image URL you want to change all images to
//     const newImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D";

//     // Select all images on the page
//     const allImages = document.querySelectorAll('img');

//     // Loop through each image and set its src attribute to the new image URL
//     allImages.forEach(image => {
//         image.src = newImageUrl;
//     });
// }

// // Event listener for the button click to trigger the image change
// document.getElementById('addToFriendButton').addEventListener('click', changeImages);


// Function to change button text to "Request Sent"
// 

// Function to toggle text and color of the h4 element
function toggleFriendStatus(event) {
    const button = event.target;
    const h4Element = button.previousElementSibling; // Get the h4 element before the button

    if (h4Element.textContent === 'Stranger') {
        h4Element.textContent = 'Friend';
        h4Element.style.color = 'green';
    } else if (h4Element.textContent === 'Friend') {
        h4Element.textContent = 'Stranger';
        h4Element.style.color = 'black'; // Change the color back to the original color
    }
}

// Event listener for the button click to toggle friend status
const addToFriendButtons = document.querySelectorAll('button[id^="addToFriendButton"]');
addToFriendButtons.forEach(button => {
    button.addEventListener('click', toggleFriendStatus);
});

// Function to toggle follow/unfollow and change button style
function toggleFollowButton(event) {
    const button = event.target;
    const buttonText = button.textContent;

    if (buttonText === 'Add to Friend') {
        button.textContent = 'Followed';
        button.style.backgroundColor = 'lightgray';
        button.style.color = 'black';
        button.disabled = false; // Enable the button
    } else if (buttonText === 'Followed') {
        button.textContent = 'Add to Friend';
        button.style.backgroundColor = 'green'; // Change the color back to the original color
        button.style.color = 'white';
        button.disabled = false; // Enable the button
    }
}

// Event listener for the button click to toggle follow/unfollow
const followButtons = document.querySelectorAll('button[id^="addToFriendButton"]');
followButtons.forEach(button => {
    button.addEventListener('click', toggleFollowButton);
});













