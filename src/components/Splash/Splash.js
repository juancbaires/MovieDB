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
            <div className='container--wrapper'>
                <section className="wrapper">
                    <div className='container'>
                        <div className="container__search">search</div>
                        <div className="container__body">
                            <div className="container__banner">banner</div>
                            <div className="container__info">
                                <div className="info--top"><h1 className="info--white">
                                    {this.state.title}
                                </h1>
                                    <p className="info--green">{this.state.quote}</p>
                                    <p className="info--white">{this.state.summary}</p>
                                </div>
                                <div className="info--bottom">bottom</div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </footer>
            </div>
        );
    }
}

export default Splash;