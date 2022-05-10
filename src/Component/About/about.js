import React, {  Component } from "react";
import './about.css'
import { Container, Fade } from "@material-ui/core";
import profile_pic from '../../image/profilePic.jpg'
import gmm from '../../image/gmm.png'
import seneca from '../../image/seneca.png'
import machi from '../../image/machi.png'
import seaMission from '../../image/sea mission.png'
import myskill from '../../image/programming.jpg'
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
                                    <p> I am a self-motivated, hard-working, individual
                                        aspiring to a fulfilling career in information
                                        technology services</p>
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
                                <h2>■ Good Music Ministry</h2>
                                <h3> - Media & Project Director (2016.09 - Current)</h3>
                                <p> ㅇ Responsible for managing and designing website using
                                    Squarespace and managed
                                    donators data with excel files. Check out our website!</p>
                                <a href="https://www.goodmusicministry.org/" className="link" target="blank" > (https://www.goodmusicministry.org/)</a>
                                <p>ㅇ Project planning and managing cultural events with more than 100 people</p>
                                <p>ㅇ Reaching out to donors to summarize and provide activities
                                    done with donors donations.</p>
                                <p>ㅇ Built team communication plans and manage project schedules
                                    that's suitable for all team members</p>
                                <p>ㅇ Recognized for superior customer service and teamwork</p>
                                <p>ㅇ Demonstrated self-motivation by proactively researching
                                        Adobe CC, video editing, filming, photography and
                                        self taught skills as required</p>
                            </div>
                            <div className="img_frame">
                                <img src={gmm} className="profilePic"></img>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div  className="home_background" >
                        <div className="info">
                                <h2>■ MachiMachi Canada</h2>
                                <h3> - Kitchen Staff (2020.02 - Current)</h3>
                                <p> ㅇ Experience working under pressure in a fast-paced environment</p>
                                <p>ㅇ Leverage communication skills to build strong relationships with coworkers</p>
                                <p>ㅇ Able to demonstrate management capabilities and oversight required to manage store inventory</p>
                                <p>ㅇ Able to prioritize work and can quickly adapt to ad-hoc requests</p>
                            </div>
                            <div className="img_frame">
                                <img src={machi} className="profilePic"></img>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div  className="home_background" >
                        <div className="info">
                                <h2>■ SEA Mission INC</h2>
                                <h3> - Project Coordinator</h3>
                                <p> ㅇ Coordinated donation projects and programs in a non-profit
                                    organization to serve low-income families especially near the
                                    finch&jane area.</p>
                                <p>ㅇ Built connection between community local stores and company.</p>
                                <p>ㅇ Project planning and managing for helping low income family that helps more than 60 people.</p>
                                <p>ㅇ Created monthly newsletter about SEA MISSION’s volunteer program</p>
                                
                            </div>
                            
                            <div className="img_frame">
                                <img src={seaMission} className="profilePic"></img>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="home_background">
                            <div className="info"> 
                            <h1>My Skills</h1>
                                <p> I am programmable with C/C++, C#, Java, Python, JavaScript, Html,CSS, Swift, Objective C </p>
                            </div>
                            <div className="img_frame">
                                <img src={myskill} className="seneca"></img>
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
                   
                </div>
            </Container>
            </div>         
        );
}

export default About; 