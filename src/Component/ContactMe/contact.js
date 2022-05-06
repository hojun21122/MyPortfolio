import React, {  Component, useState } from "react";
import './contact.css'
import { Container } from "@material-ui/core";
import { useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';

/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/


const SERVICE_ID = "service_w13uo17";
const TEMPLATE_ID = "template_ghkuieg";
const USER_ID = "ZQPLJ6YtKC-vihe1w";

function Contact (props) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
  };

        return (    
            <Container fixed>
                <div className="field">
                    <div className="contact">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Your Name</label>
                            <input type="text" name="from_name" className="text" placeholder="Your name" autoComplete="off" required/>
                            <label>Your Email</label>
                            <input type="email" name="from_email" className="text" placeholder="Your email"  autoComplete="off" required/>
                            <label>Message</label>
                            <textarea name="message" placeholder="Your message...." required /><br></br>
                            <input type="submit" value="Send" required/>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
                
               
            </Container>      
        );
}

export default Contact; 