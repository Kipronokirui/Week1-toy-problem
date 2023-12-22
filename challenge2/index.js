// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, 
// it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.
function checkSpeed() {
    // Get the car's speed from the user
    const speed = parseInt(prompt("Enter the speed of the car: "));
  
    // Define the speed limit and demerit point threshold
    const speedLimit = 70;
    const maxPoints = 12;
  
    // Check if the speed is above the limit
    if (speed > speedLimit) {
      // Calculate demerit points
      const points = Math.floor((speed - speedLimit) / 5);
      // Print the points and check for license suspension
      alert(`Your Points are: ${points}`);
      if (points > maxPoints) {
        alert("License suspended");
      }
    } else {
      // Speed is within the limit, print "Ok"
      alert("Ok");
    }
}
  
// Call the function to check the speed
checkSpeed();