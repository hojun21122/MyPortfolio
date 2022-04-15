import React, {  Component } from "react";
import './about.css'
import { Container, Fade } from "@material-ui/core";
import profile_pic from '../../image/profilePic.jpg'
import seneca from '../../image/seneca.png'
import { useEffect, useState, useRef} from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
      className={`about-fade-in ${isVisible ? 'is-visible' : ''}`} 
      ref={domRef}
      >
        {props.children}
      </div>
    );
  }
function About(props) {  
    /*
    const containerRef = useRef();
    const [isVisible, setisVisible] = useState(true);
    useEffect(() =>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry => setisVisible(entry.isIntersecting))
        });
        observer.observe(containerRef.current);
        return() => observer.unobserve(containerRef.current);
    },)*/
        return (
            <div className="div_background">
                <Container>
                <div className="about_background">
                    <FadeInSection>
                        <div>
                            <div className="home_background">
                                <div className="info">
                                    <h1>My name is Ho Jun Hwang!</h1>
                                    <p> I am passionate self-motivated individual with
                                        strong analytic skills seeking for challenges
                                        to gain diverse experience.</p>
                                </div>
                                <div className="img_frame">
                                <img src={profile_pic} className="profilePic"></img>
                            </div>
                            </div>  
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div  className="home_background" >
                        <div className="info">
                            <h1>Work Experience</h1>
                                <li>Good Music Ministry as Media & Project Director</li>
                                <a>Managed website using Squarespace and managed donators data with excel files.</a> <a href="https://www.goodmusicministry.org/" target="blank"> (https://www.goodmusicministry.org/)</a> <br></br>
                                <a>Project planning and managing cultural events with more than 100 people</a> <br></br>
                                <a>Build team communication plans and manage project schedules that's suitable for all team members</a> <br></br>
                                <a>Possessed required skills with quick learning by self-researching and exercises.</a> <br></br>
                            
                                <li>Machi Machi</li>
                                <a>Experience working under pressure in fast-paced environment</a> <br></br>
                                <a>Leverage communication skills to build strong relationships with coworkers</a> <br></br>
                                <a>Strong time management and decision making required to manage topping levels and teas.</a> <br></br>
                                <a>Maintained high quality bubble teas and toppings by strictly following given recipe and procedure.</a> <br></br>
                                <a>Able to prioritize work and can quickly adapt to ad-hoc requests</a> <br></br>
                                <li>SEA MISSION INC</li>
                                <a>Project planning and managing for helping low income family that helps more than 60 people.</a> <br></br>
                                <a>Created monthly newsletter about SEA MISSION’s monthly projects and achievement for donors</a> <br></br>
                            
                            </div>
                            
                            <div className="img_frame">
                                <img src={profile_pic} className="profilePic"></img>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="home_background">
                            <div className="info"> 
                            <h1>My Skills</h1>
                                <p> I am most comfortable with Java and Python. </p>
                            </div>
                        
                            <div className="img_frame">
                                <img src={profile_pic} className="profilePic"></img>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                         <div className="home_background">
                            <div className="info"> 
                                <h1>Education</h1>
                                <p>Seneca College Computer Programming & Analysis (CPA)<br></br>
                                  Candidate for Ontario College Advanced Diploma</p>
                            </div>
                            <div className="img_frame">
                                <img src={seneca} className="seneca"></img>
                            </div>
                           
                        </div> 
                    </FadeInSection>
                   
                    <FadeInSection>
                        <div className="home_background">
                        <div className="info">
                            <h1>My Interest</h1>
                            <p> I am </p> 
                        </div>
                        
                        <div className="img_frame">
                                <img src={profile_pic} className="profilePic"></img>
                            </div>
                         </div>
                    </FadeInSection>
                </div>
            </Container>
            </div>         
        );
}

export default About; 