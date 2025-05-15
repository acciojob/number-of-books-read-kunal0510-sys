
const numberOfBooksRead = (library) => {
  let readCount = 0;

  if (!Array.isArray(library)) {
    return 0; 
  }

  for (const book of library) {
    if (book && typeof book === 'object' && book.readingStatus === true) {
      readCount++;
    }
   
  }
  return readCount;
};

// Example Usage (Not part of the function definition, but good for testing)
const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false },
];

const readBooksCount = numberOfBooksRead(library);
console.log(readBooksCount); // Output: 2

const emptyLibrary = [];
const noBooksRead = numberOfBooksRead(emptyLibrary);
console.log(noBooksRead); // Output: 0

const invalidInput = null;
const invalidInputResult = numberOfBooksRead(invalidInput);
console.log(invalidInputResult); // Output: 0

const mixedLibrary = [
    { author: 'Author 1', title: 'Book 1', readingStatus: true },
    { author: 'Author 2', title: 'Book 2', readingStatus: false },
    null,  // Introduce a null entry
    { author: 'Author 3', title: 'Book 3', readingStatus: true },
    { author: 'Author 4', title: 'Book 4', readingStatus: false },
    undefined, //Introduce an undefined entry
    { author: 'Author 5', title: 'Book 5', readingStatus: true },
    { author: 'Author 6', title: 'Book 6', readingStatus: false },
];
const mixedResult = numberOfBooksRead(mixedLibrary);
console.log(mixedResult); // Output: 3
