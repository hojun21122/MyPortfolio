import React  from "react";
import './about.css'
import { Container } from "@material-ui/core";
import profile_pic from '../../image/profilePic.jpg'

import korea from '../../image/korea.png'
import seneca from '../../image/seneca.png'
import machi from '../../image/machi.png'

import img15 from '../../image/gallery/IMG_9230.webp'
import myskill from '../../image/programming.jpg'

function About() {  
        return (
          
          <div className="about_background">
                <Container>
                  <div className="about_field">
                 
                        <div className="left_field">
                          <div className="card_section_left">
                              <div className="img_frame">
                                  <img src={profile_pic} className="profilePic" alt="profile"></img>
                              </div>
                                  <div className="info">
                                      <h1>I am Ho-Jun</h1>
                                      <p> I am a self-motivated, hard-working, individual
                                          aspiring to a fulfilling career in information
                                          technology services</p>
                                  </div>
                          </div>
                        </div>
                        
                        <div className="right_field">
                          <div className="card_section_right">
                              <div className="img_frame">
                                      <img src={seneca} className="seneca" alt="seneca logo"></img>
                                  </div>
                                  <div className="info"> 
                                      <h1>Education</h1>
                                      <p>Seneca College Computer Programming & Analysis (CPA)<br></br>
                                      Ontario College Advanced Diploma</p>
                                  </div>
                          </div>
                        </div>
                        <div className="right_field">
                          <div className="card_section_right2">
                              <div className="img_frame">
                                      <img src={myskill} className="skills" alt="seneca logo"></img>
                                  </div>
                                  <div className="info"> 
                                      <h1>Skills</h1>
                                      <p>C++, Java, JavaScript, Python, Html, Css, SQL, React, Angular, MongoDb, Node, AdobeCC</p>
                                  </div>
                          </div>
                        </div>
                        <div className="left_field">
                          <div className="card_section_left2">
                              <div className="img_frame">
                                  <img src={korea} className="profilePic" alt="profile"></img>
                              </div>
                                  <div className="info">
                                      <h1>I am an Immigrant</h1>
                                      <p> I Immigrated from Korea to Canada in 2012 which allow me to  speak Korean and English fluently.</p>
                                  </div>
                          </div>
                        </div>
                        <div className="left_field">
                          <div className="card_section_left3">
                              <div className="img_frame">
                                  <img src={img15} className="seneca" alt="profile" style={{filter: 'brightness(95%) contrast(85%) grayscale(50%)'}}></img>
                              </div>
                                  <div className="info">
                                      <h1>I am Photographer / Videographer</h1>
                                      <p> I like to record my journey as Photo/Video. It improves my creativity and imagination for my designs and project ideas.</p>
                                  </div>
                          </div>
                        </div>
                    
                  </div>
            </Container>
          </div>
        );
}

export default About; 