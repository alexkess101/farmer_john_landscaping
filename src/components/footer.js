import React, {Component} from 'react';

export default class Footer extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className= 'footer-container'>
                <div className="copyright">
                    <i class="far fa-copyright"></i> Farmer Johns Landscaping LLC || All Rights Reserved
                </div>
                
            </div>
        )
    }
}