function ageInDays(person) {
    // Concatenate first name and last name to form the full name
    const fullName = `${person.firstName} ${person.lastName}`;
    
    // Calculate the age in days
    const ageInDays = person.age * 365; // Assuming no leap years for simplicity

    // Define the callback function
    function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }

    // Return the callback function
    return logMessage;
}

// Example usage
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const log = ageInDays(person);
log(); // Output: The person's full name is John Doe and their age in days is 10950.
