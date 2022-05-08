import React, { Component } from 'react'
import styles from './header.module.css'
import logo from '../../image/logo_backgroundless.png'
import { Container } from '@material-ui/core'
import Grid from '@mui/material/Grid';
import { HashRouter, Link} from "react-router-dom";

function Header(props){  
        return (                 
          <HashRouter basename='/'>
              <div className={styles.header}>
            <Container>
              <nav className={styles.navbar}>
                <ul className={styles.navbar_menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutMe">About Me</Link></li>  
                    <li><Link to="/"><img className={styles.logo} src={logo} alt="logo"/></Link>    </li>
                    <li><Link to="/mypage">My Page</Link></li>                 
                    <li><Link to="/contact">Contact Me</Link></li> 
                </ul>
              </nav> 
            </Container>
            
          </div>
          </HashRouter>   
          
 
        );
}

export default Header; 