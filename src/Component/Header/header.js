import React, { Component } from 'react'
import styles from './header.module.css'
import logo from '../../image/logo_backgroundless.png'
import { Container } from '@material-ui/core';
function Header(props){  
        return (                    
          <div className={styles.header}>
            <div className={styles.announce}>
                <a>This is hojun's portfolio page</a>
            </div>
            <Container>
              <nav className={styles.navbar}>
                <div className={styles.navbar_logo}>
                  <a href="/"><img src={logo} alt="logo" width="100px"  /></a>           
                </div>
                <ul className={styles.navbar_menu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/myp">My Page</a></li>
                    <li><a href="/about">About Me</a></li>                   
                    <li><a href="/corona">Corona</a></li> 

                </ul>

              </nav> 
            </Container>
            
          </div>
 
        );
}

export default Header; 