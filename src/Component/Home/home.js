import React, {  Component, useState } from "react";
import './home.css'
import { Container } from "@material-ui/core";
import { useEffect, useRef} from "react";

/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/




function Home (props) {
    const containerRef = useRef();
    const [isVisible, setisVisible] = useState(true);
    useEffect(() =>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry => setisVisible(entry.isIntersecting))
        });
        observer.observe(containerRef.current);;
    },)
        return (    
            <div>
                    <Container fixed>
                 <div className="main2">
                        <div classname='main2-txt'>
                                <h2 className={`main-header ${isVisible ? 'is-visible' : ''}`}>Welcome to the world <br /> that I've created</h2>
                                <Container className={`subtitle ${isVisible ? 'is-visible' : ''}`} ref={containerRef}>
                                    <a>This is HoJun's portfolio page</a>
                                </Container>
                        </div>
                 </div>
            </Container>
            </div>
            
                            
        );
}

export default Home; 