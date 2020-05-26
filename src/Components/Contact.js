import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleApiWrapperr from './Maps'


const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleHeadline = {color:'#f8b04b'}

export default function Contact() {
    return(
        
        <div style={{overflow: 'hidden'}}>
            <NavBar></NavBar>
            <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.7'}}/>
            </div>
            <div class="row" style={{position: 'relative', 'margin-top': '-15vh', 'padding-left': '12vw'}}>
                <Typography variant="h4" style={{color: 'white'}}>
                    Contact
                </Typography>
            </div>
            <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '15vh', 'padding-bottom': '5vh'}}>
                <Grid xs={1}/>
                <Grid xs={7}>
                    <GoogleApiWrapperr/>
                </Grid>
                <Grid xs={3}>
                    <Grid container spacing={0} direction="column">
                        <Typography variant="h6">
                            Metta Capital Advisors LLP
                        </Typography>
                        <Typography variant="subtitle1">
                            803, Symphony, <br/>
                            Nehru Rd, Vile Parle East, <br/>
                            Mumbai, Maharashtra 400057
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}