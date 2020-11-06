import { nanoid } from 'nanoid';

export const createBooksStore = () => {
  return ({
    books: [],
    addBook(booksName) {
      this.books.push({
        booksName,
        id: nanoid()
      });
    },

    removeBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
  });
};
