import React from 'react';
import BookList from '';
import BookInput form '';
import { BookProvider, MushroomProvider } from '../stores/storesProvider';

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
