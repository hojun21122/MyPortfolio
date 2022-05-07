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
               
                 <div className="footer">
                        This page is made by Ho Jun Hwang <br></br>
                        Thank you for visiting                        
                 </div>
            </Container>
                            
        );
}

export default Footer; 