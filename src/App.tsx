import React from 'react';

import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

export function App() {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
}
