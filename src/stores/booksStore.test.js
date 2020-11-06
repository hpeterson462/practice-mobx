import { createBooksStore } from './booksStore';

describe('createBooksStore', () => {
  it('returns an object that is the book store', () => {
    const booksStore = createBooksStore();
    expect(booksStore).toEqual({
      books: [],
      addBook: booksStore.addBook,
      removeBook: booksStore.removeBook
    });
  });
});
