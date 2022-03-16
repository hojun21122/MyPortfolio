import React, {  Component } from "react";
import './about.css'
import { Container } from "@material-ui/core";
import profile_pic from '../../image/profilePic.jpg'

function About(props) {  
        return (
            <div className="div_background">
                <Container>
                <div className="about_background">
                
                <div className="home_background">
                    <h1>My name is Ho Jun Hwang!</h1>
                    <p> I am passionate self-motivated individual with
                        strong analytic skills seeking for challenges
                        to gain diverse experience.</p>
                    <img src={profile_pic} className="profilePic"></img>
                </div>  
                <div className="home_background">
                    <h1>Work Experience</h1>
                    <ul>
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
                    </ul>
                </div> 
                <div className="home_background">
                    <h1>My Skills</h1>
                    <p> I am most comfortable with Java and Python. </p>
                </div> 
                <div className="home_background">
                    <h1>Education</h1>
                    <a>Seneca College Computer Programming & Analysis (CPA)</a><br></br>
                    <a>Candidate for Ontario College Advanced Diploma</a>
                </div> 
                <div className="home_background">
                    <h1>My Interest</h1>
                    <p> I am </p>
                </div>
            </div>
            </Container>
            </div>         
        );
}

export default About; 