import React, {Component} from 'react';

import Navbar from './navbar';
import Footer from './footer';

export default class Home extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className='home-container'>
                <Navbar/>
                <div className="hero-wrapper">
                    <div className="parallax-photo">
                        <div className="title">
                            The Local Legend
                        </div>
                    </div>
                </div>

                <div className="residential-commercial-wrapper">
                    <div className="title">
                        Residential and commercial
                    </div>

                    <div className="subheading">
                        Being a local company doesn't keep us from picking up big jobs. We do anything from town homes to local businesses with multiple properties around the county.
                    </div>
                </div>

                <div className="touched-wrapper">
                    
                </div>
                <Footer/>
            </div>
        )
    }
}