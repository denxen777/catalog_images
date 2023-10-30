import React from 'react';

import { ListImages } from './components/ListImages';
import { Header } from './components/Header';

export function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <ListImages />
      </div>
    </div>
  );
}
