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
                        Residential and Commercial
                    </div>

                    <div className="subheading">
                        With multiple properties around the county we do anything from town homes to local businesses, small jobs to big jobs, and tiny residential to large commercial.
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
                        <NavLink to='/gallery' className="img1"></NavLink>
                        <NavLink to='/gallery' className="img2"></NavLink>
                        <NavLink to='/gallery' className="img3"></NavLink>
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
                                from={{x:'88vw'}}
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
                            from={{width: '90%'}}
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
                            <div className="item">Lawn growing out of control or you just don't have time anymore to keep it looking nice? We can help.</div>
                        </div>

                        <div className="list-wrapper">
                            <div className="item">Sprinkler system leaking or lost pressure and you've tried to fix it yourself, but just can't seem to find the problem? We can help.</div>
                        </div> 
                    </div>
                    <NavLink to='/about' className='link'>need more help?</NavLink>
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

                    <NavLink to='/contact' className="link">click here to connect with us</NavLink>
                    
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
                                Contact us today for an instant quote. When you call ask us about our promotional deals that we have going on around your neighborhood. Take care of your lawn with Farmer John's.
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}