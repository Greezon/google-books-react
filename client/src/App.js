import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import PageOne from "./pages/PageOne"
function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Nav />

    <PageOne/>



    </div>
  );
}

export default App;
