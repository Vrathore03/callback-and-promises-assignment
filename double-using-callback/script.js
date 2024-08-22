function doubleArray(arr, callback) {
    return arr.map(callback);
}

// Callback function to double the value
function doubleValue(value) {
    return value * 2;
}

// Example usage
const numbers = [1, 2, 3, 4];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]
