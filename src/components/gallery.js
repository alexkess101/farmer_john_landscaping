import React, {Component} from 'react';

import NavBar from './navbar';
import Footer from './footer';




export default class Gallery extends Component {
    constructor() {
        super();

        this.state={
            photos: ['https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80', 'https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1533213371985-4ad0dc5c4da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80', 'https://images.unsplash.com/photo-1557399194-3b4e52543f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80', 'https://images.unsplash.com/photo-1545130114-6263996a2555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1460&q=80', 'https://images.unsplash.com/photo-1547637732-aac133be822f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80']
        }
    
    }

    render() {
        return (
            <div className='gallery-container'>
                <NavBar/>
                <div className="spacer97"></div>
                <div className="gallery-wrapper">
                    <div className="title">
                        Our Gallery
                    </div>

                    <div className="gallery-grid" >
                        {this.state.photos.map(item => {
                            return <div className='grid-photo-item' style={{backgroundImage: `url(${item})`}} />
                            
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}