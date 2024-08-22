function greet(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string' && name.trim() !== '') {
            // Construct the greeting message
            const message = `Hello, ${name}!`;
            // Resolve the promise with the message
            resolve(message);
        } else {
            // Reject the promise if the input is invalid
            reject('Invalid name');
        }
    });
}

// Example usage
greet('Mithun')
    .then(message => console.log(message)) // Output: Hello, Mithun!
    .catch(error => console.error(error));
