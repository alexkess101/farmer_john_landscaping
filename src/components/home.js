import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

import Navbar from './navbar';
import Footer from './footer';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { Strong } from 'gsap';

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
                    <div id='trigger'/>
                    <div className="subheading">
                        Servicing local businesses and homes allows us to finish projects swiftly and with great care.
                    </div>
                </div>
                
                <Controller>
                    <Scene
                        triggerElement='#trigger'
                        duration={420}
                    >
                        {(progress) => (
                            <Tween
                            to={{width: '0px'}}
                            totalProgress={progress}
                            paused
                            
                            >
                            <div className="animation-wrapper">

                            </div>
                            
                        </Tween>
                        )}
                    </Scene>
                </Controller>

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
                <Footer/>
            </div>
        )
    }
}