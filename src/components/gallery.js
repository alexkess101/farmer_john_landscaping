import React, {Component} from 'react';

import NavBar from './navbar';
import Footer from './footer';


export default class Gallery extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div>
                <NavBar/>
                this is the gallery page

                <Footer/>
            </div>
        )
    }
}