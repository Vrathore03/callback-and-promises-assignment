function processBooks(books, callback) {
    // Extract titles from the books and create a new list
    const titles = books.map(book => book.title);
    
    // Pass the list of titles to the callback function
    callback(titles);
}

function logTitlesInAlphabeticalOrder(titles) {
    // Sort titles in alphabetical order
    titles.sort();
    
    // Log the sorted titles to the console
    console.log('Titles in alphabetical order:');
    titles.forEach(title => console.log(title));
}

// Example usage
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Moby Dick', author: 'Herman Melville', year: 1851 }
];

// Call processBooks with books and logTitlesInAlphabeticalOrder as callback
processBooks(books, logTitlesInAlphabeticalOrder);
