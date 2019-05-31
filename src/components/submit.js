import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
        <div className ="submit-page-wrapper">
            <div className="title">
                Thank you for connecting with us!<br/> We will get back to you as soon as we can.
            </div>

            <NavLink exact to ='/' className="link">Back to Home</NavLink>
            
        </div>
    );
}