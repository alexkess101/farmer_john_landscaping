import React, {Component} from 'react';

import NavBar from './navbar';
import Footer from './footer';


export default class Contact extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div>
                <NavBar/>
                this is the contact page

                <Footer/>
            </div>
        )
    }
}