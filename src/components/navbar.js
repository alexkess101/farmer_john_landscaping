import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            hidden: true
        }
        this.handleClick=this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({
            hidden: !this.state.hidden
        })
        console.log(this.state.hidden);
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-wrapper">
                    <div className="left-side">
                        <NavLink exact to='/'>
                            <img src="https://res.cloudinary.com/akbottega/image/upload/v1558993826/1.png" alt="farmer_johns_logo"/>
                        </NavLink>
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

                    <div className="small-center">
                        <div className="subheading">
                            Tap to call for an instant quote
                        </div>
                        <a href="tel:18019791888">801-979-1888</a>
                    </div>

                    <div className="right-side">
                        <div className="instant-quote">
                            Call now for an instant quote
                        </div>
                        <div className="phone-number">
                            801-979-1888
                        </div>
                        <i class="far fa-caret-square-down" onClick={this.handleClick} ></i>
                        
                    </div>
                </div>

                <div className="mobile-menu-wrapper" style={this.state.hidden ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                    <div className="link-wrapper">
                        <NavLink exact to='/' className="navlink">HOME</NavLink>
                    </div>
                    
                    <div className="link-wrapper">
                        <NavLink exact to='/about' className="navlink">ABOUT</NavLink>
                    </div>

                    <div className="link-wrapper">
                        <NavLink exact to='/gallery' className="navlink">GALLERY</NavLink>
                    </div>

                    <div className="link-wrapper bottom">
                        <NavLink exact to='/contact' className="navlink">CONTACT</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}