import React from 'react'
import styles from './header.module.css'
import logo from '../../image/logo_backgroundless.png'
import { Container } from '@material-ui/core'
import { HashRouter, Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

function Header(props){  
        return (                 
          <HashRouter basename='/'>
            
              <div className={styles.header}>
            <Container>
              <div className={styles.menu}>
                <Dropdown>
                  <Dropdown.Toggle  variant="secondary" id="dropdown-basic" >
                    Menu
                  </Dropdown.Toggle >
                  <Dropdown.Menu>
                      <Dropdown.Item><Link to="/" className='mitem'>Home</Link></Dropdown.Item>
                      <Dropdown.Item ><Link to="/aboutMe" className='mitem'>About Me</Link></Dropdown.Item>
                      <Dropdown.Item ><Link to="/mypage" className='mitem'>My Page</Link></Dropdown.Item>                
                      <Dropdown.Item><Link to="/contact" className='mitem'>Contact Me</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
              
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