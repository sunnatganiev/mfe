import React from 'react';
// import { mount } from 'marketing/MarketingApp';

// console.log(mount);

import MarketingApp from '../components/MarketingApp';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
