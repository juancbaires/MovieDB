import React, { Component } from 'react';
import './Splash.css'

class Splash extends Component {
    state = {
        title: "INTERSTELLAR",
        quote: 'Mankind was born on Earth. It was never meant to die here.',
        summary: 'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        catergories: 'Adventure, Drama, Science Fiction',
        production: "Legendary Entertainment, Syncopy, Lynda Obst Productions",
        originRealease: '2014-11-05',
        MovieLength: '169 mins',
        boxOffice: '$675,120,017',
        voteAverage: '8.2 / 10'
    }
    render() {
        return (
            <div className="container">
                <div className="container__overlay">
                    <section className="movieBanner"></section>
                    <section className="movieInfo">
                        <div className="movieInfo--description">
                            <h1 className="color__white">{this.state.title}</h1>
                            <h3 className="color__green">{this.state.quote}</h3>
                            <p className="color__white">{this.state.summary}</p>
                        </div>
                        <div className="movieInfo--description"></div>
                        <div className="movieInfo--description"></div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Splash;