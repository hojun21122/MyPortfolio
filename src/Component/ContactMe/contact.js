import React from "react";
import './contact.css'
import { Container } from "@material-ui/core";
import { useRef} from "react";
import emailjs from '@emailjs/browser';
import doc from '../../image/doc.png'
import linkedin from '../../image/linkedIn.png'
import facebook from '../../image/facebook.png'
import insta from '../../image/insta.png'
import resume from '../../HoJunHwang2022.pdf'

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
                    <div className="myprofile">
                        <div className="myinfo" >
                            <h2> My Info</h2>
                            <hr></hr>
                            <a>Ho-Jun Hwang</a><br></br>
                            <a>647-550-9650</a><br></br>
                            <a>hojun21122@gmail.com</a><br></br>
                        </div>
                        
                        <div className="resumeBlock">
                            <form action = {resume} target="blank">
                                <button type="submit" className="contactbtn"><img src={doc} className="doc_icon" alt="resume"></img><br></br><br></br>Resume<br></br>  </button>
                            </form>
                        </div>
                        <div className="resumeBlock">
                            <form action = "https://www.linkedin.com/in/hojunhwang1101/" target="blank">
                                <button type="submit" className="contactbtn"><img src={linkedin} className="doc_icon" alt="resume"></img><br></br><br></br>Linked in<br></br>  </button>
                            </form>
                        </div>
                        <div className="resumeBlock">
                            <form action = "https://www.instagram.com/_hojun_h/" target="blank">
                                <button type="submit" className="contactbtn"><img src={insta} className="doc_icon" alt="resume"></img><br></br><br></br>Instagram<br></br>  </button>
                            </form>
                        </div>
                        <div className="resumeBlock">
                            <form action = "https://www.instagram.com/_hojun_h/" target="blank">
                                <button type="submit" className="contactbtn"><img src={facebook} className="doc_icon" alt="resume"></img><br></br><br></br>facebook<br></br>  </button>
                            </form>
                        </div>
                    </div>
                </div>
                
               
            </Container>      
        );
}

export default Contact; 