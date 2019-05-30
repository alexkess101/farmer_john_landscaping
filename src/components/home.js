import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

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
                        <NavLink to='#' className="img1"></NavLink>
                        <NavLink to='#' className="img2"></NavLink>
                        <NavLink to='#' className="img3"></NavLink>
                    </div>
                </div>
                
                <div className="quality-wrapper">
                    <div className="title">
                        Local Utah Quality
                    </div>
                    <div id='trigger'/>
                    <div className="subheading">
                        Servicing local businesses and homes allows us to finish projects swiftly and with great care.
                    </div>
                </div>
                
                <Controller>
                    <Scene
                        triggerElement='#trigger'
                        duration={500}
                    >
                        {(progress) => (
                            <Tween
                                from={{x:'98vw'}}
                                to={{x:'-50%'}}
                                totalProgress={progress}
                                offset={3}
                                paused
                            >
                                <div className="lawn-mower-img"></div>
                            </Tween>
                        )}

                    </Scene>

                    <Scene
                        triggerElement='#trigger'
                        duration={500}
                    >
                        {(progress) => (
                            <Tween
                            to={{width: '0px'}}
                            totalProgress={progress}
                            paused
                            offset={3}
                            >
                            <div className="animation-wrapper"></div>
                            
                        </Tween>
                        )}
                    </Scene>
                </Controller>
                <div className="grass-wrapper"></div>
                
                <div className="helper-wrapper">
                    <div className="title">
                            How can we help you?
                    </div>

                    <div className="subheading">
                        <div className="list-wrapper">
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>

                        <div className="list-wrapper">
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="item">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
                

                <div className="quotes-container">
                    <div className="title">
                        What People Are Saying
                    </div>

                    <div className="quotes-wrapper">
                        <div className="box-wrapper">
                            <div className="image"></div>
                            <div className="subheading">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam nobis eos odio suscipit rem sed at."
                            </div>
                        </div>

                        <div className="box-wrapper">
                            <div className="image"></div>
                            <div className="subheading">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam nobis eos odio suscipit rem sed at."
                            </div>
                        </div>

                        <div className="box-wrapper">
                            <div className="image"></div>
                            <div className="subheading">
                                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ullam nobis eos odio suscipit rem sed at."
                            </div>
                        </div>
                    </div>
                </div>

                <div className="connect-wrapper">
                    <div className="title">
                            Connect With Us
                    </div>

                    <NavLink to='#' className="link">click here to connect with us</NavLink>
                    
                    <div className="info-wrapper">
                        <div className="info">
                                <div className="phone">
                                    801-979-1888
                                </div>

                                <div className="email">
                                    kellyjik@hotmail.com
                                </div>
                        </div>

                        <div className="subheading">
                                Contact us today for an instant quote. Let us know that you found us on our website and we'll give you a discount. Take care of your lawn with Farmer John.
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}