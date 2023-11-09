import React from 'react';
import { Header } from './templates/Header';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <main>
        <p>Homepage</p>
      </main>
    </div>
  );
};

export default App;
