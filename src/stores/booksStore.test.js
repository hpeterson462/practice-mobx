import { createBooksStore } from './bookStore';

describe('createBooksStore', () => {
  it('returns an object that is the book store', () => {
    const bookStore = createBooksStore();
    expect(bookStore).toEqual({
      books: [],
      addBook: bookStore.addBook,
      removeBook: bookStore.removeBook
    });
  });
});
