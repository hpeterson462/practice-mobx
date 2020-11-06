import React from 'react';
import { useObserver } from 'mobx-react';
import { useBookStore } from '../../../stores/storesProvider';

const BookList = () => {
  const booksStore = useBookStore();

  return useObserver(() => (
    <ul>
      {booksStore.books.map((book) => {
        return (
          <li key={book.id}>
            {book.bookName}
            <button onClick={() => booksStore.removeBook(book.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  ));
};

export default BookList;
