import { nanoid } from 'nanoid';

export const createBooksStore = () => {
  return ({
    books: [],
    addBook(bookName) {
      this.books.push({
        bookName,
        id: nanoid()
      });
    },
    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  });
};
