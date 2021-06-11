import React, { useState, FormEvent, useContext } from 'react';

const ContactForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        alert(`Email send! \n Data: \n Name: ${name} \n Email: ${email} \n Message: ${message}`);
        setName("");
        setEmail("");
        setMessage("");

    }    
    return(
        <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
            <form id="contactForm"onSubmit={e => handlerOnSubmit(e)}>

                <div className="form-floating mb-3">
                    
                    <input 
                    className="form-control" 
                    id="name" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}                    
                    placeholder="Enter your names..." 
                    />

                    <label >Full name</label>
                    <div className="invalid-feedback" >A name is required.</div>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    className="form-control" 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}    
                    placeholder="name@example.com" 
                    />
                    <label >Email address</label>
                    <div className="invalid-feedback" >An email is required.</div>
                    <div className="invalid-feedback" >Email is not valid.</div>
                </div>

                <div className="form-floating mb-3">
                    <textarea 
                    className="form-control" 
                    id="message" 
                    value={message}
                    onChange={e => setMessage(e.target.value)}    
                    placeholder="Enter your message here..." />
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" >A message is required.</div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
            </form>
        </div>
    </div>
    );
} 

export default ContactForm;