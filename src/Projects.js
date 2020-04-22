import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Image, Theme, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
 
const useStyles = makeStyles({
   avatar1: {
       width: 100,
       height: 100,
       marginTop: "1vw",
       // display: "flex",
       // justifyContent: "center",
       marginLeft: "auto",
       marginRight:"auto",
   },
   paperMaster: {
    // padding: "2vw",
    textAlign: "center",
    color: "#000000",
    // background: "#A0DB9E",
    // border: "5px solid black",
  },
   paper1:{
       width: "20vw",
       height: "200px",
       position: "fixed",
      
   },
   paper2: {
    // height:"100vh",
    width: "60vw",
    height: "100%",
    // width: "2%",
  },
  paper3: {
    height:"40vh",
    width: "50vw",
    // background: "#55769A",
    border: "1px solid #55769A",
    flexDirection: "row",
    display: "flex",
    
  },
  paper5:{
    // height:"65vh",
    width: "10vw",
    // height: "40vh",
    // background: "#55769A"
  },
  paper6:{
    // height:"65vh",
    width: "40vw",
    height: "100%",
    // border: "1px solid hotpink",
    // background: "#55769A"
  },
   button1: {
       display: "block",
       marginLeft: "5vw",
   },
   root: {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
       overflow: 'hidden',
       marginTop: "20vh",
       marginLeft: "20vw",
       // backgroundColor: theme.palette.background.paper,
   }
 
})
 

const Projects = ()  => {
   const classes = useStyles();
   return (
     <div className="Projects">
         <div>
       <Grid container>
           <Grid item>
           <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}>
                <Button className={classes.button1}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/factflow">Fact Flow</Link></Button>
                <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/tropetracker">Trope Tracker</Link></Button>
                <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/internships">internships</Link></Button>
                <Button className={classes.button1} ><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
            </Paper>
           </Grid>
           <Grid item style={{marginLeft: "20vw"}}>
            <Paper elevation={0} className={[classes.paper2, classes.paperMaster]}>
                <Link style={{textDecoration: "none"}} to="/projects/factflow">
                    <Button className={classes.button2} style={{marginTop: "10vw"}}>
                    <Paper elevation={0} className={classes.paper3}>
                        <Paper elevation={0} className={classes.paper5}>
                        <Typography variant="h5" style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Fact Flow</Typography>
                        </Paper>  
                        <Paper elevation={0} className={classes.paper6}>
                        <img src={"../Pictures/FactFlow.png"} style={{height:"100%",  alignContent:"right"}}/>
                        </Paper>
                    </Paper>
                    </Button>
                </Link>
                <Link style={{textDecoration: "none"}} to="/projects/tropetracker">
                    <Button className={classes.button2} style={{marginTop: "10vh"}}>
                    <Paper elevation={0} className={classes.paper3}>
                        <Paper elevation={0} className={classes.paper5}>
                        <Typography variant="h5" style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Trope Tracker</Typography>
                        </Paper>  
                        <Paper elevation={0} className={classes.paper6}>
                        <img src={"../Pictures/TropeTracker.png"} style={{height:"100%", alignContent:"right"}}/>
                        </Paper>
                    </Paper>
                    </Button>
                </Link>
                <Link style={{textDecoration: "none", marginTop: "10vh"}} to="/projects/internships">
                    <Button className={classes.button2} style={{marginTop: "10vh"}}>
                    <Paper elevation={0} className={classes.paper3}>
                        <Paper elevation={0} className={classes.paper5}>
                        <Typography  style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Past Internships</Typography>
                        </Paper>  
                        <Paper elevation={0} className={classes.paper6}>
                        <img src={"../Pictures/Apple.png"} style={{height:"100%",marginLeft:"5vw", alignContent:"right"}}/>
                        </Paper>
                    </Paper>
                    </Button>
                </Link>
            </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper1} style={{top: "0"}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                   
               </Paper>
           </Grid>
       </Grid>
       </div>
       <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "5vh"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button>
       </div>
     </div>
    
   );
 };
  export default Projects;
