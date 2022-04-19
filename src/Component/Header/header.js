import React, { Component } from 'react'
import styles from './header.module.css'
import logo from '../../image/logo_backgroundless.png'
import { Container } from '@material-ui/core'
import Grid from '@mui/material/Grid';

function Header(props){  
        return (                    
          <div className={styles.header}>
            <Container>
              <nav className={styles.navbar}>
                <ul className={styles.navbar_menu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>  
                    <li><a href="/"><img className={styles.logo} src={logo} alt="logo"/></a>    </li>
                    <li><a href="/myp">My Page</a></li>                 
                    <li><a href="/weather">Weather</a></li> 
                </ul>
              </nav> 
            </Container>
            
          </div>
 
        );
}

export default Header; 