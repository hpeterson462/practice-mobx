import React from 'react';
import { useObserver } from 'mobx-react';
import { useBooksStore } from '../../../stores/booksStore';

const BookItem = () => {
  const [book, setBook] = useState('');
  const booksStore = useBooksStore();

  const handleClick = () => {
    booksStore.addBook(book);
    setBook('');
  };

  const handleChange = (event) => {
    setBook(event.target.value)
  };

  return useObserver(() => (
    <>
      <input
        value={book}
        onChange={handleChange}
        text='text'
      />
      <button onClick={handleClick}>Add Book</button>
    </>
  ));
};

export default BookInput;
