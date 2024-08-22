function manipulateString(str) {
    // Convert the string to uppercase
    const manipulatedStr = str.toUpperCase();
    
    // Define the callback function
    function logString() {
        console.log(`The manipulated string is: ${manipulatedStr}`);
    }
    
    // Return the callback function
    return logString;
}

// Example usage
const log = manipulateString("hello world");
log(); // Output: The manipulated string is: HELLO WORLD
