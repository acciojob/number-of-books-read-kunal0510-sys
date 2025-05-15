// Sample library object
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false
  }
];

// Function to count the number of books read
function numberOfBooksRead() {
  let count = 0;

  for (let book of library) {
    if (book.readingStatus) {
      count++;
    }
