const categories = document.querySelector('.categories');
const featuredBooks = document.querySelector('.featured-books');

// Define book data for each category
const booksData = {
  'Fiction': [
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', imageUrl: 'images/bimage4.webp' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', imageUrl: 'images/bimage5.jpg' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: 'images/bimage7.jpg' },
  ],
  'Non-fiction': [
    { title: 'A Short History of Nearly Everything', author: 'Bill Bryson', imageUrl: 'images/bimage8.jpg' },
    { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', imageUrl: 'images/bimage9.webp' },
    { title: 'Outliers: The Story of Success', author: 'Malcolm Gladwell', imageUrl: 'images/bimage4.webp' },
  ],
  'Science': [
    { title: 'A Brief History of Time', author: 'Stephen Hawking', imageUrl: 'images/bimage10.jpg' },
    { title: 'Cosmos', author: 'Carl Sagan', imageUrl: 'images/bimage11.jpg' },
    { title: 'The God Particle', author: 'Leon Lederman', imageUrl: 'images/bimage12.jpg' },
  ],
  'History': [
    { title: 'A Peoples History of the United States', author: 'Howard Zinn', imageUrl: 'images/bimage13.jpg' },
    { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', imageUrl: 'images/bimage14.webp' },
    { title: '1491: New Revelations of the Americas Before Columbus', author: 'Charles C. Mann', imageUrl: 'images/bimage15.jpg' },
  ],
  'Literature': [
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', imageUrl: 'images/bimage16.jpg' },
    { title: 'Invisible Man', author: 'Ralph Ellison', imageUrl: 'images/bimage17.jpg' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: 'images/bimage19.jpg' },
  ],
};

// Add click event listeners to each category link
for (const category of categories.children) {
  category.addEventListener('click', (event) => {
    event.preventDefault();

    // Clear previous book results
    featuredBooks.innerHTML = '';

    // Filter and display books based on the selected category
    const filteredBooks = booksData[event.target.textContent];
    for (const book of filteredBooks) {
        const bookCard = createBookCard(book.title, book.author, book.imageUrl);
        featuredBooks.appendChild(bookCard);
      }      
  });
}

// Function to create a book card element
function createBookCard(title, author, imageUrl) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
  
    const bookImage = document.createElement('img');
    bookImage.src = imageUrl; // Use the provided image URL
    bookImage.alt = 'Book Cover';
    bookCard.appendChild(bookImage);
  
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = title;
    bookCard.appendChild(bookTitle);
  
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;
    bookCard.appendChild(bookAuthor);
  
    return bookCard;
  }
  
