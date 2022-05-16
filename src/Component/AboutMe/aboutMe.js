import React from "react";
import './aboutMe.css'
import { Container } from "@material-ui/core";
import korea from '../../image/korea.png'
import canada from '../../image/canada.jpg'
import helloWorld from '../../image/helloWorld.mp4'
import  ImageGallery  from "react-image-gallery";
import images from './images'
import "react-image-gallery/styles/css/image-gallery.css";

function AboutMe(props){
    return(
        <div className="aboutMe">
            <Container>
            <div className="journey">
                <div className="korea">
                    <img src={korea} className="korea-img" alt="Korea"></img>
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
                <div className="Canada">
                    <img src={canada} className="canada-img" alt="canada"></img>
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
                <div className="captionbox">
                    <h1>I am programmer!</h1>
                        <p><br></br>studied in Seneca College with Computer Programming and Analysist(CPA) program.<br></br>
                    And I am a person who loves challenges and problem solving </p>
                </div>
            </Container>
        </div>
        <Container>
            <div className="interest">
                
                <h1>I am a photographer and videographer</h1>
                <p>You can take a look at my media projects here!</p>
            </div>
            <div className="grid">
             <ImageGallery className="gallery" items={images} lazyLoad="true"/>
             <div className="video-grid">
                 <iframe className="top-video" src="https://www.youtube.com/embed/_bTyfp3YWg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ="true"></iframe>
                <iframe className="top-video" src="https://www.youtube.com/embed/f7yn5_Istnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ="true"></iframe>
                <iframe className="bottom-video" src="https://www.youtube.com/embed/1eor27GD4jA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ="true"></iframe>
                <iframe className="bottom-video" src="https://www.youtube.com/embed/BKK7wT6_V8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
             </div>
            </div>
                
        </Container>
        
    </div>
    );
}

export default AboutMe;
