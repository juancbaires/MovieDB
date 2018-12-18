import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: "INTERSTELLAR",
    quote: 'Mankind was born on Earth. It was never meant to die here.',
    catergories: 'Adventure, Drama, Science Fiction',
    production: "Legendary Entertainment, Syncopy, Lynda Obst Productions",
    originRealease: '2014-11-05',
    MovieLength: '169 mins',
    boxOffice: '$675,120,017',
    voteAverage: '8.2 / 10'
  }
  render() {
    return (
      <div className="App">
        <h1>MovieDb</h1>

      </div>
    );
  }
}

export default App;
