import React, { createContext, useContext } from 'react';
import { createBooksStore } from './booksStore';
import { useLocalObservable } from 'mobx-react-lite';

const BooksContext = createContext(null);

export const BookProvider = ({ children }) => {
  const booksStore = useLocalObservable(() => createBooksStore());

  return (
    <BooksContext.Provider value={booksStore}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksStore = () => useContext(BooksContext);


