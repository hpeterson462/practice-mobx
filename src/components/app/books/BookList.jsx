import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useBooksStore } from '../../../stores/storesProvider';

const BookList = () => {
  const booksStore = useBooksStore();

  return useObserver(() => (
    <>
      {
        booksStore.books.map((book) => {
          return (
            <li key={book.id}>
              {book.bookName}
              <button onClick={() => booksStore.removeBook(book.id)}>
                X
            </button>
            </li>
          );
        })
      }
    </>
  ));
};

export default BookList;
