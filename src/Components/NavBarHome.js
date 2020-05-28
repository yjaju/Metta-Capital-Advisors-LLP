import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './Media/logo.gif'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom';
import useWindowScrollPosition from '@rehooks/window-scroll-position'

const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleLink = {fontSize: '1.3vw', textDecoration: 'none', color: '#000000', textAlign: 'center'}
const activeLink = {color: "#F8B04B", fontWeight: 'bold'}

export default function NavBarHome() {
    const [change, setChange] = useState(false);
    const changePosition = 5;

    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }

    if (position.y > changePosition && !change) {
        setChange(true);
    }

    if (position.y <= changePosition && change) {
        setChange(false);
    }

    let style = {
        backgroundColor: change ? "#F9DDB7" : "transparent",
        transition: "400ms ease",
        'max-height': '10vh',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };


    return(
        <div class="container">
            <div class="row">
                <AppBar elevation={0} style={style}>
                    <Toolbar>
                        <Grid container spacing={0}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={2} style={styleItem}>
                                <NavLink to="/">
                                    <img src={logo} alt="Metta Capital Logo" style={{width: '10vw'}}></img>
                                </NavLink>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1} style={styleItem}>
                                <NavLink to="/about-us" style={styleLink} activeStyle={activeLink}>
                                    <p>About Us</p>
                                </NavLink>
                            </Grid>
                            <Grid item xs={1} style={styleItem}>
                                <NavLink to="/expertise" style={styleLink} activeStyle={activeLink}>
                                    <p>Expertise</p>
                                </NavLink>
                            </Grid>
                            <Grid item xs={1} style={styleItem}>
                                <NavLink to="/team" style={styleLink} activeStyle={activeLink}>
                                    <p>Team</p>
                                </NavLink>
                            </Grid>
                            <Grid item xs={1} style={styleItem}>
                                <NavLink to="/transactions" style={styleLink} activeStyle={activeLink}>
                                    <p>Transactions</p>
                                </NavLink>
                            </Grid>
                            <Grid item xs={1} style={styleItem}>
                                <NavLink to="/contact" style={styleLink} activeStyle={activeLink}>
                                    <p>Contact</p>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
        
    );
}