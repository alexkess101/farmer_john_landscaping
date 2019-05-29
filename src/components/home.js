import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

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

                <div className="spacer60"></div>

                <div className="residential-commercial-wrapper">
                    <div className="title">
                        Residential and commercial
                    </div>

                    <div className="subheading">
                        Being a local company doesn't keep us from picking up big jobs. We do anything from town homes to local businesses with multiple properties around the county.
                    </div>
                </div>

                <div className="touched-wrapper">
                    <div className="title">
                        Touched by Farmer John
                    </div>
                    
                    <div className="subtitle">
                        click images to see more
                    </div>
                    
                    <div className="circle-image-wrapper">
                        <NavLink className="img1"></NavLink>
                        <NavLink className="img2"></NavLink>
                        <NavLink className="img3"></NavLink>
                    </div>
                </div>

                <div className="quality-wrapper">
                    <div className="title">
                        Local Utah Quality
                    </div>

                    <div className="subheading">
                        Servicing local businesses and homes allows us to finish projects swiftly and with great care.
                    </div>
                </div>

                <div className="animation-wrapper">

                </div>
                <Footer/>
            </div>
        )
    }
}