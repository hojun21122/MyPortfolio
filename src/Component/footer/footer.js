import React, {  Component, useState } from "react";
import './footer.css'
import { Container } from "@material-ui/core";
import { useEffect, useRef} from "react";

/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/




function Footer (props) {
        return (    
            <Container fixed>
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
                 <div >
                        all rights reserves @Ho Jun Hwang <br></br>
                        Thank you for visiting                        
                 </div>
            </Container>
                            
        );
}

export default Footer; 