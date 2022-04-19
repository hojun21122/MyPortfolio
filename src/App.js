import './App.module.css';
import Header from './Component/Header/header';
import Home from './Component/Home/home';
import About from './Component/About/about';
import Footer from './Component/footer/footer';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchData, { fetchData }  from './API/index';

function App(props) {

    return(
      <Router>
        <Header/>
        
          
        <Switch>
            <Route exact path="/" component={Home}>
              <Home></Home>
              <About></About>  
            </Route>
            <Route path="/about"/>
            <Route path="/myp"/>
            <Route path="/corona">
              

            </Route>
            
        </Switch>
        <Footer></Footer>
        
      </Router>
    );
}

export default App;
