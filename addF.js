document.addEventListener('DOMContentLoaded', function () {
    // Select all h4 elements
    var h4Elements = document.querySelectorAll('h4');
  
    // Select the button
    var addToFriendButton = document.getElementById('addToFriendButton');
  
    // Function to change h4 color to red
    function changeH4ColorToRed() {
      h4Elements.forEach(function (h4) {
        h4.style.color = 'red';
      });
    }
  
    // Function to change h4 color to green
    function changeH4ColorToGreen() {
      h4Elements.forEach(function (h4) {
        h4.style.color = 'green';
      });
    }
  
    // Add click event to the button
    addToFriendButton.addEventListener('click', function () {
      // Simulating adding to friend logic
      // You can replace this with your actual logic
      var isFriend = confirm('Do you want to add to friend?');
  
      // Check the user's decision
      if (isFriend) {
        // If the user is a friend, change h4 color to green
        changeH4ColorToGreen();
      } else {
        // If the user is not a friend, change h4 color to red
        changeH4ColorToRed();
      }
    });
  });
  