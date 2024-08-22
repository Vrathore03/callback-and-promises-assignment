async function fetchData() {
    try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response as JSON
        const data = await response.json();
        
        // Log the result to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occurred during the fetch operation
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchData();
