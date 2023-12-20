//Write a function that prompts the user to input student marks. 
// The input should be between 0 and 100. 
// The output should correspond the correct grade

function calculateGrade() {
    // Prompt the user for input
    let userInput = prompt("Enter the student's marks (between 0 and 100):");

    // Parse the input as a number
    const marks = parseFloat(userInput);

    // Check if the input is a valid number and within the specified range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Calculate the grade based on the specified criteria
        var grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Display the result
        alert('Student Grade: ' + grade);
    } else {
        // Display an error message for invalid input
        alert('Invalid input. Please enter a valid number between 0 and 100.');
    }
}

// Call the function to prompt the user for input and calculate the grade
calculateGrade();

