import React from 'react';
import BookList from '../components/app/books/BookList';
import BookInput from '../components/app/books/BookItem';
import { BookProvider } from '../stores/storesProvider';

const Home = () => {
  return (
    <>
      <BookProvider>
        <BookList />
        <BookInput />
      </BookProvider>
    </>
  );
};

export default Home;
