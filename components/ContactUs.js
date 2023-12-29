import React, { useEffect } from 'react'
import brushSvg from '../images/brush.svg'

const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us - Goateknocoats"
      });

    return (
    <div className="more-details position-relative row">
        <h1 className="has-brush display-4">
            <span>
                Contact Us
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mt-4">Easy To Get In Touch</h4>
                    <p className="container-fluid mt-1">
                        <a href="https://maps.app.goo.gl/Bp5DRVqDgQ6zjx228" target="_blank">
                            <span className="fas fa-lg fa-gtk-color-1 fa-map-marker-alt"></span>
                            Plot No 11 And 12
                            <br/>Corlim Industrial Estate
                            <br/>Near Scoop Oxygen
                            <br/>Corlim, Goa 403110
                            <br/>India
                        </a>
                    </p>
                    <p className="container-fluid mt-1">
                        <a href="mailto:goateknocoats@gmail.com">
                            <span className="far fa-lg fa-gtk-color-1 fa-envelope"></span>
                            goateknocoats@gmail.com
                        </a>
                    </p>
                    <p className="container-fluid mt-1">
                        <a href="tel:9421241651">
                            <span className="fas fa-lg fa-gtk-color-1 fa-phone"></span>
                            (+91) 9421241651
                        </a>
                    </p>
                    <p className="container-fluid mt-1">
                        <span className="far fa-lg fa-gtk-color-1 fa-clock"></span>
                        Hours of operation
                        <br/>Monday to Saturday 9:00 am to 5:30 pm
                    </p>
                </div>
                <div className="col-md-6 d-none">
                    <h4 className="mt-4">Send us a Message</h4>
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label id="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                        </div>
                        <div className="form-group">
                            <label id="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label id="contact">Contact:</label>
                            <input type="tel" className="form-control" id="contact" placeholder="Enter contact" name="contact" />
                        </div>
                        <div className="form-group">
                            <label id="message">Message:</label>
                            <textarea className="form-control" id="message" placeholder="Type your message"
                                name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs