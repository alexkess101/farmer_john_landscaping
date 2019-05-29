import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-wrapper">
                    <div className="left-side">
                        <img src="https://res.cloudinary.com/akbottega/image/upload/v1558993826/1.png" alt="farmer_johns_logo"/>
                        <div className="text">
                            <div className="Farmer-Johns">
                                Farmer Johns
                            </div>
                            <div className="landscaping">
                                Landscaping
                            </div>
                        </div>
                        
                    </div>

                    <div className="center">
                        <NavLink exact to='/' className="navlink">HOME</NavLink>
                        <NavLink to='/about' className="navlink">ABOUT</NavLink>
                        <NavLink to='/gallery' className="navlink">GALLERY</NavLink>
                        <NavLink to='/contact' className="navlink">CONTACT</NavLink>

                    </div>

                    <div className="right-side">
                        <div className="instant-quote">
                            Call now for an instant quote
                        </div>
                        <div className="phone-number">
                            801-979-1888
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}