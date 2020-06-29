import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Pokemon from '../../../untitled:/Users/gebruiker/Library/Mobile Documents/com~apple~CloudDocs/codaisseur/code/week-2/myfirstapp/src/components/^Pokemon';

function App() {
  return (
    <div className="App">
        <main>
            <Pokemon />
            <Title content="Some Simple Title" />
          </main>
    </div>
  );
}

export default App;
