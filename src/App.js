import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Pokemon from './components/Pokemon'
function App() {
  return (
    <div className="App">
        <main>
            <Pokemon />
            <Title content="Some Simple Title" />
            <App.css />
          </main>
    </div>
  );
}

export default App;
