// Function to fetch and log data from the API
async function fetchPosts() {
    try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response as JSON
        const posts = await response.json();
        
        // Log the data to the console
        console.log(posts);
    } catch (error) {
        // Log any errors that occurred during the fetch operation
        console.error('Error fetching posts:', error);
    }
}

// Example usage
fetchPosts();
