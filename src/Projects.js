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
                <img src={"../Pictures/Apple.png"} style={{height:"100%", alignContent:"right"}}/>
                </Paper>
            </Paper>
            </Button>
        </Link>
     </div>
    
   );
 };
  export default Projects;
