// Sample library object
const library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  { author: "Suzanne Collins", title: "Mockingjay", readingStatus: false }
];

// Function to count number of books read
function numberOfBooksRead() {
  return library.filter(book => book.readingStatus).length;
}

// Display result when button is clicked
function showNumberOfBooksRead() {
  const resultDiv = document.getElementById("result");
  const count = numberOfBooksRead();
  resultDiv.textContent = 📚 You have read ${count} book(s).;
}