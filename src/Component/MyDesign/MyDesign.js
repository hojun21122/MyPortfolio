import React, { useRef }  from "react";
import './MyDesign.css'
import { Container } from "@material-ui/core";

function MyDesign() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const handleClick1 =() =>{
    ref1.current.style.background = "white";
    ref2.current.style.background = "white";
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#be3455,#ff0066)"
  }
  const handleClick2 =() =>{
    ref1.current.style.background = "rgb(80, 20, 109";
    ref2.current.style.background = "rgb(20, 20, 109)";
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#33ccff,#ff0066)"
  }
  const handleClick3 =() =>{
    ref1.current.style.background = "rgb(80, 20, 109";
    ref2.current.style.background = "rgb(20, 20, 109)";
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#666379 3%,#66669c 36%, #8575be 54%, #8b8cd1 72%, #e6e3e7 95%)"
  }
  const handleClick4 =() =>{
    ref1.current.style.background = "#be3455";
    ref3.current.style.background = "white";;
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#ebab367c,#ad8b99)"
  }
  const handleClick5 =() =>{
    ref1.current.style.background = "#be3455";
    ref3.current.style.background = "white";;
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#f70369,#ec9c087c)"
  }
  const handleClick6 =() =>{
    ref1.current.style.background = "#be3455";
    ref3.current.style.background = "rgb(20, 20, 109);"
    ref3.current.style.background = "white";
    ref4.current.style.background = "linear-gradient(#F5DF4D,#f0c22d)"
  }
        return (
          <div className="design-background">
            <div className="design-coulum1">
              <a classname="column1-link" target="blank" href="https://www.pantone.com/color-of-the-year-2023">
                <div className="design-photocard" >
                      <div className="photocard-square">
                        <p className="square-text"> 
                          CLICK HERE TO SEE <br></br>
                          PANTONE'S ARTICLE ABOUT <br></br>COLOR OF THE YEAR
                        </p>
                      </div>
                      <div className="photocard-text">
                        <b>"Viva Magenta"</b><br></br>
                        Color Of The Year 2023
                      </div>
                  </div>
              </a>
            </div>
            <div className="design-columm2">
                <h1>I love to design</h1>
                <p>Every year, Pantone chooses the color of the year and the chosen Color for 2022 is "VERI PERI". Here is my inspired design for the color of the year.</p>
                <div className="column2-grid" >
                    <div className="col2-circle" >
                      <span ref={ref1}></span>
                      <span ref={ref2}></span>
                      <span ref={ref3}></span>
                      <span ref={ref4}></span>
                    </div>
                    <div className="col2-btn">
                        <button className="col2-btn1" onClick={handleClick1}>click me</button>
                        <button className="col2-btn2" onClick={handleClick2}>click me</button>
                        <button className="col2-btn3" onClick={handleClick3}>click me</button>
                        <button className="col2-btn4" onClick={handleClick4}>click me</button>
                        <button className="col2-btn5" onClick={handleClick5}>click me</button>
                        <button className="col2-btn6" onClick={handleClick6}>click me</button>
                    </div>
                </div>
            </div>
          </div>
        );
}

export default MyDesign; 