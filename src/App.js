import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
