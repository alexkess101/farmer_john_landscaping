import React, {Component} from 'react';

import NavBar from './navbar';
import Footer from './footer';


export default class Gallery extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className='gallery-container'>
                <NavBar/>
                

                <Footer/>
            </div>
        )
    }
}