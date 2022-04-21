import React, {  Component } from "react";
import './aboutMe.css'
import { Container, Fade } from "@material-ui/core";
import korea from '../../image/korea.png'
import canada from '../../image/canada.jpg'
import helloWorld from '../../image/helloWorld.mp4'
function AboutMe(props){
    return(
        <div className="aboutMe">
            <Container>
            <div className="journey">
                <div className="korea">
                    <img src={korea} className="korea-img"></img>
                </div>
                <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                    </div>
                <div className="canada">
                    <img src={canada} className="canada-img"></img>
                </div>
            </div>
            <div className="first_para">
                <p>My name is Ho Jun Hwang and I was born in Seoul, Korea.<br></br>
                I immigrated to Canada when I was 16 years old.  </p>
            </div>
        </Container>
        <div className="video-container">
            <video autoPlay muted loop>
                <source src={helloWorld}></source>
            </video>
            <Container className="caption">
                <div>
                    <h1>I am programmer!</h1>
                        <p><br></br>studied in Seneca College with Computer Programming and Analysist(CPA) program.<br></br>
                    And I am a person who loves challenges and problem solving </p>
                </div>
            </Container>
        </div>
    </div>
    );
}

export default AboutMe;