// import React, {Component} from 'react';
import React, { useState } from 'react';

import NavBar from './navbar';
import Footer from './footer';


const Contact = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errorText, setErrorText] = useState(true);


    const handleSubmit = () => {
        event.preventDefault();

        if (firstName == "" || lastName == "" || address == "" || city == "" || zip == "" || email == "" || phoneNumber == "") {
            setErrorText(false);
        } else {
            console.log('did it');

            props.history.push('/submit_page');
        }
        
        
    }
    
        return (
            <div className='contact-container'>
                <NavBar/>
                <div className="spacer97"></div>
                <div className="contact-wrapper">
                    <div className="title">
                        We would love to hear from you
                    </div>
                    {errorText == false ? <div className='error-message'>Please fill out all of the forms before submitting</div> : <div className='error-message'></div>}
                    <form onSubmit={handleSubmit} className='form-wrapper'>
                        <div className="inputs">
                            <div className="left-side">
                                <input 
                                    type="text"
                                    name="first name"
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={event => {
                                        setFirstName(event.target.value);
                                        setErrorText(true);
                                    }}

                                />

                                <input 
                                    type="text"
                                    name="last name"
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={event => {
                                        setLastName(event.target.value);
                                        setErrorText(true);
                                    }}
                                />

                                <input 
                                    type="text"
                                    name="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={event => {
                                        setEmail(event.target.value);
                                        setErrorText(true);
                                    }}
                                />

                                <input 
                                    type="number"
                                    name="phone"
                                    placeholder='Phone Number'
                                    value={phoneNumber}
                                    onChange={event => {
                                        setPhoneNumber(event.target.value);
                                        setErrorText(true);
                                    }}
                                />

                                <div className="address-wrapper">
                                    <input 
                                        type="text"
                                        name="address"
                                        placeholder='Address'
                                        value={address}
                                        onChange={event => {
                                            setAddress(event.target.value);
                                            setErrorText(true);
                                        }}
                                    />

                                    <input 
                                        type="text"
                                        name="city"
                                        placeholder='City'
                                        value={city}
                                        onChange={event => {
                                            setCity(event.target.value);
                                            setErrorText(true);
                                        }}
                                    />


                                    <input 
                                        type="number"
                                        name="zipcode"
                                        placeholder='ZipCode'
                                        value={zip}
                                        onChange={event => {
                                            setZip(event.target.value);
                                            setErrorText(true);
                                        }}
                                    />

                                
                                </div>
                                
                            </div>

                            <div className="right-side">
                                    <textarea 
                                        name="message" 
                                        id="" 
                                        cols="30" 
                                        rows="10"
                                        placeholder="Message"
                                        value={message}
                                        onChange={event => {
                                            setMessage(event.target.value);
                                            setErrorText(true);
                                        }}
                                    /> 
                            </div>
                        </div>
                        
                        <button type='submit' className='button' 
                            style={
                                firstName != "" && lastName != "" && address != "" && city != "" && zip != "" && email != "" && phoneNumber != "" && message != "" ? {backgroundColor: 'green'} : null
                            }
                        >Submit</button>


                            
                    </form>
                    
                </div>
                

                <Footer/>
            </div>
        );
    }

    export default Contact;