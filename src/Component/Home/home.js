import React, {  Component } from "react";
import './home.css'
import bckimg from '../../image/IMG_8907.JPG'
import { Container } from "@material-ui/core";
import { useEffect } from "react";

/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/
function Home (props) {     
        return (    
            <Container fixed>
                 <div className="main2">
                     <div className="main2_txt">
                        <h2>Welcome to the world <br /> that I've created</h2>
                        <Container fixed className="subtitle">
                             <a>This is HoJun's portfolio page</a>
                        </Container>
                     </div>
                 </div>
            </Container>
                            
        );
}

export default Home; 