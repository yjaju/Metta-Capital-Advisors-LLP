import Grid from '@material-ui/core/Grid'
import NavBar from '../Components/NavBar';
import Typography from '@material-ui/core/Typography'
import Footer from '../Components/Footer';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { LinkedIn } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import { useState } from 'react';

const orange = '#f8b04b';
const font = 'Lato';
const grey = '#808080';

const styleItem = {'paddingLeft': '5vw', 'paddingTop': '3vh', display: 'flex', flexDirection: 'column'}
const styleItemwCursor = {'paddingLeft': '5vw', 'paddingTop': '3vh', 'cursor': 'pointer', display: 'flex', flexDirection: 'column'}
const styleHeadline = {color: orange, fontFamily: font}

export default function Team() {
    const [openPJ, setOpenPJ] = useState(false);
    const [openSS, setOpenSS] = useState(false);
    const [openAC, setOpenAC] = useState(false);

    const handleOpenPJ = () => {
        setOpenPJ(true);
    };
  
    const handleClosePJ = () => {
        setOpenPJ(false);
    };

    const handleOpenSS = () => {
        setOpenSS(true);
      };
    
    const handleCloseSS = () => {
        setOpenSS(false);
    };

    const handleOpenAC = () => {
        setOpenAC(true);
      };
    
    const handleCloseAC = () => {
        setOpenAC(false);
    };

    
    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Leadership Team
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Leadership Team
                        </Typography>
                    </div>
                </Hidden>
                <Grid container direction="row" style={{'paddingTop': '7vh', 'paddingBottom': '5vh', 'paddingLeft': '10vw'}}>
                    <Hidden only="xs">
                        <Grid item xs={9} sm={5} md={3} onClick={handleOpenPJ} style={styleItemwCursor}>
                            <img src="/assets/pankajj.png" alt="Pankaj Jaju" style={{width: '100%', height: 'auto'}}/>
                            <Grid container spacing={0} direction="row">
                                <Grid item width="90%">
                                    <Grid container direction="column">
                                        <Typography variant="subtitle1" style={styleHeadline}>
                                            Pankaj Jaju
                                        </Typography>
                                        <Typography variant="caption" style={{color: grey, fontFamily: font}}>
                                            Founder & CEO
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item width="10%" style={{'paddingTop': '5px', color: grey}}>
                                    <LinkedIn fontSize="small"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={9} sm={5} md={3} style={styleItem}>
                            <img src="/assets/pankajj.png" alt="Pankaj Jaju" style={{width: '100%', height: 'auto'}}/>
                            <Grid item width="100%">
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" style={styleHeadline}>
                                        Pankaj Jaju
                                    </Typography>
                                    <Grid item style={{'paddingTop': '5px', display: 'flex', flexDirection: 'row'}}>
                                        <Typography variant="caption" style={{fontFamily: font}}>
                                            Founder & CEO
                                        </Typography>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: grey, 'paddingLeft': '5px', 'paddingTop': '5px'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={2}/>
                        <Grid item xs={1}/>
                    </Hidden>
                    <Hidden only="xs">
                        <Grid item xs={9} sm={5} md={3} onClick={handleOpenSS} style={styleItemwCursor}>
                            <img src="/assets/saurabhs.png" alt="Saurabh Singhi" style={{width: '100%', height: 'auto'}}/>
                            <Grid container spacing={0} direction="row">
                                <Grid item width="90%">
                                    <Grid container direction="column">
                                        <Typography variant="subtitle1" style={styleHeadline}>
                                        Saurabh Singhi
                                        </Typography>
                                        <Typography variant="caption" style={{fontFamily: font}}>
                                        
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item width="10%" style={{'paddingTop': '5px', 'paddingLeft': '5px', color: grey}}>
                                    <LinkedIn fontSize="small"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={9} sm={5} md={3} style={styleItem}>
                            <img src="/assets/saurabhs.png" alt="Saurabh Singhi" style={{width: '100%', height: 'auto'}}/> 
                            <Grid item width="100%">
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" style={styleHeadline}>
                                    Saurabh Singhi
                                    </Typography>
                                    <Grid item style={{'paddingTop': '5px', display: 'flex', flexDirection: 'row'}}>
                                        <Typography variant="caption" style={{fontFamily: font}}>
                                            
                                        </Typography>
                                        <a href="https://www.linkedin.com/in/saurabh-singhi-ba42b111/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: grey, 'paddingLeft': '5px', 'paddingTop': '5px'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={2}/>
                        <Grid item xs={1}/>
                    </Hidden>
                    <Hidden only="xs">
                        <Grid item xs={9} sm={5} md={3} onClick={handleOpenAC} style={styleItemwCursor}>
                            <img src="/assets/ashish.png" alt="Ashish Chovatia" style={{width: '100%', height: 'auto'}}/>
                            <Grid container spacing={0} direction="row">
                                <Grid item width="90%">
                                    <Grid container direction="column">
                                        <Typography variant="subtitle1" style={styleHeadline}>
                                            Ashish Chovatia
                                        </Typography>
                                        <Typography variant="caption" style={{color: grey, fontFamily: font}}>
                                            
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item width="10%" style={{'paddingTop': '5px', color: grey}}>
                                    <LinkedIn fontSize="small"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={9} sm={5} md={3} style={styleItem}>
                            <img src="/assets/ashish.png" alt="Ashish Chovatia" style={{width: '100%', height: 'auto'}}/>
                            <Grid item width="100%">
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" style={styleHeadline}>
                                        Ashish Chovatia
                                    </Typography>
                                    <Grid item style={{'paddingTop': '5px', display: 'flex', flexDirection: 'row'}}>
                                        <Typography variant="caption" style={{fontFamily: font}}>
                                            
                                        </Typography>
                                        <a href="https://www.linkedin.com/in/ashish-chovatia-2038772/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: grey, 'paddingLeft': '5px', 'paddingTop': '5px'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
                
                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openPJ}
                    onClose={handleClosePJ}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openPJ}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'maxHeight': '75vh', 'overflowY': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Grid item width="100%"> 
                                        <Grid container direction="column">
                                            <Typography variant="h6" style={styleHeadline}>
                                                Pankaj Jaju
                                            </Typography>
                                            <Grid item style={{'paddingTop': '5px', display: 'flex', flexDirection: 'row'}}>
                                                <Typography variant="subtitle1" style={{color: grey, fontFamily: font}}>
                                                    Founder & CEO
                                                </Typography>
                                                <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey', 'paddingLeft': '5px', 'paddingTop': '5px'}}>
                                                    <LinkedIn fontSize="small"/>
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}  style={{'paddingTop': '10px'}}>
                                    <Typography variant="body2" style={{color: grey, fontFamily: font}}>
                                    Pankaj has over 27 years of Investment Banking experience, having worked at ENAM / Axis Capital before setting up Metta in 2016. He has delivered a host of marquee transactions across M&A, PE and Capital Markets. He led relationships with large business houses including the Aditya Birla Group, and IB practice for sectors such as retail, real estate, textiles, commodities amongst others. He was involved in most of the equity raising and strategic initiatives by major retail houses in India, including Arvind, Future Group, Landmark Group, and Rahejas.  He also headed Strategic Partnerships for Axis Bank as it built out its digital strategy. 
                                    </Typography>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid item xs={5}>
                                    <img id="image-modal"src="/assets/pankajj.png" alt="Pankaj Jaju" style={{width: '90%', height: 'auto'}}></img>
                                </Grid>
                                <Grid item md={6} >
                                    <Grid container spacing={0} direction="column">
                                        <Typography variant="h6" style={styleHeadline}>
                                            Pankaj Jaju
                                        </Typography>
                                        <Grid item style={{'paddingTop': '5px', display: 'flex', flexDirection: 'row'}}>
                                            <Typography variant="subtitle1" style={{color: grey,fontFamily: font}}>
                                                Founder & CEO
                                            </Typography>
                                            <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey', 'paddingLeft': '5px', 'paddingTop': '5px'}}>
                                                <LinkedIn fontSize="small"/>
                                            </a>
                                        </Grid>
                                    </Grid>
                                    <Grid item style={{'paddingTop': '10px'}}>
                                        <Typography variant="body2" style={{color: grey, fontFamily: font, textJustify: 'inter word', textAlign: 'justify'}}>
                                        Pankaj has over 27 years of Investment Banking experience, having worked at ENAM / Axis Capital before setting up Metta in 2016. He has delivered a host of marquee transactions across M&A, PE and Capital Markets. He led relationships with large business houses including the Aditya Birla Group, and IB practice for sectors such as retail, real estate, textiles, commodities amongst others. He was involved in most of the equity raising and strategic initiatives by major retail houses in India, including Arvind, Future Group, Landmark Group, and Rahejas.  He also headed Strategic Partnerships for Axis Bank as it built out its digital strategy. 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Hidden>
                                
                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openSS}
                    onClose={handleCloseSS}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openSS}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'maxHeight': '75vh', 'overflowY': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Grid container spacing={0} direction="row">
                                        <Grid item width="90%">
                                            <Grid container direction="column">
                                                <Typography variant="h6" style={styleHeadline}>
                                                Saurabh Singhi
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item width="10%" style={{'paddingTop': '5px', 'paddingLeft': '5px'}}>
                                            <a href="https://www.linkedin.com/in/saurabh-singhi-ba42b111/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey'}}>
                                                <LinkedIn fontSize="small"/>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{'paddingTop': '10px'}}>
                                    <Typography variant="body2" style={{color: grey, fontFamily: font}}>
                                    Saurabh has over 13 years of experience in financial markets across verticals like fund management, asset reconstruction, investment banking, and corporate banking. He has previously worked as an Investment Banker at Axis Capital (Mumbai) and Enam Securities (Mumbai). Saurabh is an MBA from ISB, Hyderabad and has a Degree in Commerce from Mumbai University. He is also a Chartered Accountant. 
                                    </Typography>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid item xs={5}>
                                    <img id="image-modal"src="/assets/saurabhs.png" alt="Saurabh Singhi" style={{width: '90%', height: 'auto'}}></img>
                                </Grid>
                                <Grid item md={6} >
                                    <Grid container direction="column">
                                        <Grid container spacing={0} direction="row">
                                            <Grid item width="90%">
                                                <Grid container direction="column">
                                                    <Typography variant="h6" style={styleHeadline}>
                                                    Saurabh Singhi
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                    
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item width="10%" style={{'paddingTop': '5px', 'paddingLeft': '5px'}}>
                                                <a href="https://www.linkedin.com/in/saurabh-singhi-ba42b111/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey'}}>
                                                    <LinkedIn fontSize="small"/>
                                                </a>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{'paddingTop': '10px'}}>
                                            <Typography variant="body2" style={{color: grey, fontFamily: font, textJustify: 'inter word', textAlign: 'justify'}}>
                                            Saurabh has over 13 years of experience in financial markets across verticals like fund management, asset reconstruction, investment banking, and corporate banking. He has previously worked as an Investment Banker at Axis Capital (Mumbai) and Enam Securities (Mumbai). Saurabh is an MBA from ISB, Hyderabad and has a Degree in Commerce from Mumbai University. He is also a Chartered Accountant.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                                
                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openAC}
                    onClose={handleCloseAC}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openAC}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'maxHeight': '75vh', 'overflowY': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Grid container spacing={0} direction="row">
                                        <Grid item width="90%">
                                            <Grid container direction="column">
                                                <Typography variant="h6" style={styleHeadline}>
                                                Ashish Chovatia
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item width="10%" style={{'paddingTop': '5px', 'paddingLeft': '5px'}}>
                                            <a href="https://www.linkedin.com/in/ashish-chovatia-2038772/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey'}}>
                                                <LinkedIn fontSize="small"/>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{'paddingTop': '10px'}}>
                                    <Typography variant="body2" style={{color: grey, fontFamily: font}}>
                                    Ashish has over 10 years of experience in Investment Banking. He has previously worked with Morgan Stanley in Mumbai, New York and London and with Lincoln International and Aarayaa Advisory in Mumbai. He has been actively covering Chemicals, Packaging, Plastic and Metals and Mining sectors. Ashish holds a Bachelor’s degree in Commerce from the NarseeMonjee College of Commerce and Economics, Mumbai. He is also a Chartered Accountant.
                                    </Typography>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid item xs={5}>
                                    <img id="image-modal"src="/assets/ashish.png" alt="Saurabh Singhi" style={{width: '90%', height: 'auto'}}></img>
                                </Grid>
                                <Grid item md={6} >
                                    <Grid container direction="column">
                                        <Grid container spacing={0} direction="row">
                                            <Grid item width="90%">
                                                <Grid container direction="column">
                                                    <Typography variant="h6" style={styleHeadline}>
                                                    Ashish Chovatia
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                    
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item width="10%" style={{'paddingTop': '5px', 'paddingLeft': '5px'}}>
                                                <a href="https://www.linkedin.com/in/ashish-chovatia-2038772/" target="_blank"  rel="noopener noreferrer" title="LinkedIn" style={{color: 'grey'}}>
                                                    <LinkedIn fontSize="small"/>
                                                </a>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{'paddingTop': '10px'}}>
                                            <Typography variant="body2" style={{color: grey, fontFamily: font, textJustify: 'inter word', textAlign: 'justify'}}>
                                            Ashish has over 10 years of experience in Investment Banking. He has previously worked with Morgan Stanley in Mumbai, New York and London and with Lincoln International and Aarayaa Advisory in Mumbai. He has been actively covering Chemicals, Packaging, Plastic and Metals and Mining sectors. Ashish holds a Bachelor’s degree in Commerce from the NarseeMonjee College of Commerce and Economics, Mumbai. He is also a Chartered Accountant.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <Footer/>
        </div>
    );
}