import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

import CharacterHanddler from "./components/CharacterHanddler"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header />
      <h1 className="Header">Characters</h1>
      <CharacterHanddler />
      <Footer />
    </div>
  );
}

export default App;
