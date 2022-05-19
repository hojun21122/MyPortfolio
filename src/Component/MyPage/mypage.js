import React from "react";
import './mypage.css'
import { Container } from "@material-ui/core";
import weather from "../../image/weather.webp"
import wordle from '../../image/wordle.webp'

/*
<a>linkedin.com/in/hojunhwangHJ</a><br></br>
                        <a>647-550-9650</a><br></br>
                        <a>hojun21122@gmail.com</a><br></br>
*/




function MyPage (props) {
        return (    
            <Container fixed>
                <p className="proj_intro">This is where you can travel my projects!<br></br> Please Enjoy my works😄</p>
                        <div className="proj_block">
                                <form action = "https://hojun21122.github.io/HJwordle/" target="blank" className="proj_form">
                                    <button type="submit" className="projbtn"><img src={wordle} className="proj_icon" alt="project"></img><br></br>Wordle Game<br></br>  </button>
                                </form>
                                <form action = "https://hojun21122.github.io/WeatherAPI/" target="blank" className="proj_form">
                                    <button type="submit" className="projbtn"><img src={weather} className="proj_icon" alt="project"></img><br></br>WeatherAPI app<br></br>  </button>
                                </form>
                                
                            </div>
            </Container>
                            
        );
}

export default MyPage; 