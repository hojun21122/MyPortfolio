import React  from "react";
import './MyDesign.css'
import { Container } from "@material-ui/core";

function MyDesign() {  
        return (
          <div className="design-background">
            <div className="design-coulum1">
              <a classname="column1-link" target="blank" href="https://www.pantone.com/color-of-the-year-2022">
                <div className="design-photocard" >
                      <div className="photocard-square">
                        <p className="square-text"> 
                          CLICK HERE TO SEE <br></br>
                          PANTONE'S ARTICLE ABOUT <br></br>COLOR OF THE YEAR
                        </p>
                      </div>
                      <div className="photocard-text">
                        <b>"VERI PERI"</b><br></br>
                        Color Of The Year 2022
                      </div>
                  </div>
              </a>
            </div>
            <div className="design-columm2">
                <h1>I love to design</h1>
                <a>Every year, Pantone chooses the color of the year and the chosen Color for 2022 is "VERI PERI". Here is my inspired design for the color of the year.</a>
                <div className="column2-grid">
                    <div className="col2-circle">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="col2-btn">
                        <button className="col2-btn1">click me</button>
                        <button className="col2-btn2">click me</button>
                        <button className="col2-btn3">click me</button>
                        <button className="col2-btn4">click me</button>
                        <button className="col2-btn5">click me</button>
                        <button className="col2-btn6">click me</button>
                    </div>
                </div>
            </div>
          </div>
        );
}

export default MyDesign; 