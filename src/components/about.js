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
                    <div className="title" style={{marginBottom: '40px'}}>
                        About Us
                    </div>

                    <div className="content-wrapper">
                        <div className="john-image"></div>

                        <div className="subheading">
                            Farmer John Kelly has been in the landscaping business for over 20 years. There is no problem that you have that he hasn't seen yet. They call him Farmer John because he planned to be a farmer when going to school. After graduating from BYU he started a side landscaping business and couldn't stay away from it. That business has grown to what we know today as Farmer John's Landscaping. There are lawns to be cut everywhere throughout the country, but Farmer John decided to stay in Utah because he loves the people and the weather.
                        </div>
                    </div>
                </div>

                <div className="qualifications-wrapper">
                    <div className="title">
                        About Farmer Johns Landscaping
                    </div>

                    <div className="subheading">
                         John is particularly qualified for taking care of all kinds of plants. He discovered his passion for anything that grows from the dirt from graduating with a bachelors in Agronomy and Horticulture. It's important that when you deal with plants that you know the science behind what makes things grow. We know how to choose plants and fertilizing techniques to best help your yard in this dry Utah climate.
                    </div>
                </div>

                <div className="skills-wrapper">
                    <div className="title">
                        We Can Help
                    </div>

                    <div className="list-wrapper">
                        <div className="list-item">Lawn care and maintenance</div>
                        <div className="list-item">Lawn care consulting</div>
                        <div className="list-item">Sprinkler instalation</div>
                        <div className="list-item">Sprinkler repairs and maintenance</div>
                        <div className="list-item">Spring cleaning</div>
                        <div className="list-item">Mowing</div>
                        <div className="list-item">Weeding</div>
                        <div className="list-item">Edging</div>
                        <div className="list-item">Yard cleanup</div>
                        <div className="list-item">Pruning trees</div>
                        <div className="list-item">Trimming bushes</div>
                        <div className="list-item">Snow removal</div>
                        <div className="list-item">Tree planting</div>
                        
                        
                    </div>
                </div>

                <div className="credit-image-wrapper">
                    <div className="image-grid">
                        <div className="img img1"></div>
                        <div className="img img2"></div>
                        <div className="img img3"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}