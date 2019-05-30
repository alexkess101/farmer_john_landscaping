import React, {Component} from 'react';

import NavBar from './navbar';
import Footer from './footer';

export default class About extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className='about-container'>
                <NavBar/>
                
                <div className="hero-wrapper">
                    <div className="title">
                        About Us
                    </div>

                    <div className="content-wrapper">
                        <div className="john-image"></div>

                        <div className="subheading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum eveniet officia dolor aperiam fugit beatae minima, nisi pariatur, optio sequi quae distinctio corrupti aut harum quaerat accusamus odit quidem inventore voluptates facilis. Minima, ipsa. Quaerat deleniti fugit autem provident veritatis nam accusantium. Quasi eos adipisci minima fugit quibusdam maxime!
                        </div>
                    </div>
                </div>

                <div className="qualifications-wrapper">
                    <div className="title">
                        About Farmer Johns Landscaping
                    </div>

                    <div className="subheading">
                        Make these columns or stamps or pictures...depending on what you want to include here the style could be different.
                    </div>
                </div>

                <div className="skills-wrapper">
                    <div className="title">
                        We Can Help
                    </div>

                    <div className="list-wrapper">
                        <div className="list-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        <div className="list-item">Lorem ipsum dolor sit, amet cr adipisicing elit.</div>
                        <div className="list-item">Lorem ipsum dolor sit, amet </div>
                        <div className="list-item">Lorem ipsum det consectetur adipisicing elit.</div>
                        <div className="list-item">Lorem ipsum dolor sit, amet consectetur a.</div>
                        <div className="list-item"> dolor sit, amet consectetur adipisicing elit.</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}