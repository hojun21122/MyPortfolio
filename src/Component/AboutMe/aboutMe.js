import React from "react";
import './aboutMe.css'
import { Container } from "@material-ui/core";
import "react-image-gallery/styles/css/image-gallery.css";

function AboutMe(props){
    return(
        <div>
        <Container>
            <div className="interest">
                
                <h1>I am a photographer and videographer</h1>
                <p>You can take a look at my media projects here!</p>
            </div>
            <div className="video-grid">
                 <iframe className="left-video" src="https://www.youtube.com/embed/_bTyfp3YWg8" title="YouTube video player" frameborder="0" allowfullscreen ="true"></iframe>
                <iframe className="right-video" src="https://www.youtube.com/embed/f7yn5_Istnc" title="YouTube video player" frameborder="0" allowfullscreen ="true"></iframe>
                <iframe className="left-video" src="https://www.youtube.com/embed/1eor27GD4jA" title="YouTube video player" frameborder="0"  allowfullscreen ="true"></iframe>
                <iframe className="right-video" src="https://www.youtube.com/embed/BKK7wT6_V8U" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>
            </div>
                
        </Container>
        
    </div>
    );
}

export default AboutMe;
