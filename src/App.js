import './App.module.css';
import Header from './Component/Header/header';
import Home from './Component/Home/home';
import About from './Component/About/about';
import AboutMe from './Component/AboutMe/aboutMe'
import Footer from './Component/footer/footer';
import Contact from './Component/ContactMe/contact'
import MyPage from './Component/MyPage/mypage'
import MyDesign from './Component/MyDesign/MyDesign';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter} from "react-router-dom";

function App(props) {

    return(
      <Router>
        <Header/>
        

        <Switch>
          <HashRouter basename="/">
            <Route exact path="/" component={Home}>
                <Home></Home>
                <About></About>
                <MyDesign></MyDesign> 
              </Route>
              <Route path="/aboutMe" component={AboutMe}/>
              <Route path="/mypage" component={MyPage}/>
              <Route path="/contact" component={Contact}>
              </Route>
          </HashRouter>
            
            
        </Switch>
        <Footer></Footer>
        
      </Router>
    );
}

export default App;
