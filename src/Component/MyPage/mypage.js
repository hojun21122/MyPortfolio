import React, {  Component, useState } from "react";
import './mypage.css'
import { Container } from "@material-ui/core";
import { useEffect, useRef} from "react";
import ready from '../../image/ready.mp4'


/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/




function MyPage (props) {
        return (    
            <Container fixed>
               
               <div className="video-container_myp">
                    <video autoPlay muted loop>
                        <source src={ready}></source>
                    </video>
                    <Container className="caption_myp">
                        <div>
                            <p className="para"><br></br>Content will be available soon </p>
                        </div>
                    </Container>
                </div>
            </Container>
                            
        );
}

export default MyPage; 