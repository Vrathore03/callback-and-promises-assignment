async function fetchCombinedData() {
    try {
        // Fetch data from the first API
        const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!todoResponse.ok) {
            throw new Error(`HTTP error! Status: ${todoResponse.status}`);
        }
        const todoData = await todoResponse.json();

        // Fetch data from the second API
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!postResponse.ok) {
            throw new Error(`HTTP error! Status: ${postResponse.status}`);
        }
        const postData = await postResponse.json();

        // Combine the results into a single object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined results to the console
        console.log(combinedData);

    } catch (error) {
        // Log any errors that occurred during the fetch operations
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchCombinedData();
