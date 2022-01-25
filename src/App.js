import './App.module.css';
import Header from './Component/Header/header';
import Home from './Component/Home/home';
import About from './Component/About/about';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchData, { fetchData }  from './API/index';

function App(props) {

    return(
      <Router>
        <Header/>
        
          
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/myp"/>
            <Route path="/corona">
              

            </Route>
            
        </Switch>
        
      </Router>
    );
}

export default App;