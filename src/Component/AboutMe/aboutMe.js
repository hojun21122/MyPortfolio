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
        <div>
        <Container>
            <div className="interest">
                
                <h1>I am a photographer and videographer</h1>
                <p>You can take a look at my media projects here!</p>
            </div>
            <div className="grid">
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
