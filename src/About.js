import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import "../node_modules/video-react/dist/video-react.css";
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import firebase from 'firebase/app';
import 'firebase/database';
import { Player } from 'video-react';



const useStyles = makeStyles({
    avatar1: {
        width: 100,
        height: 100,
        marginTop: "2vw",
        marginLeft: "auto",
        marginRight:"auto"
    },
    avatar2: {
      width: 300,
      height: 300,
      marginTop: "2vw",
      display: "felx",
      // justifyContent: "center"
      marginLeft: "auto",
      marginRight:"auto"
  },
    paper1:{
        width: "20vw",
        height: "200px",
        position: "fixed",
    },
    paper2:{
        width: "60vw",
        height: "100%",
        marginLeft: "20vw",
    },
    paper3:{
      marginTop:"5vh",
      width: "40vw",
      // textAlign: "center",
      marginLeft: "10vw"
    },
    button1: {
        display: "block",
        marginLeft: "5vw",
    }

})



const About = ()  => {
    const classes = useStyles();

    
    return (
      <div className="About">
        <Grid container style={{height: "100%"}}>
            <Grid item>
                <Paper elevation={0} className={classes.paper1}  style={{bottom: "0"}}> 
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/LalaLand/Movies">Movies</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Photos">Photos</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Writing">Writing</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Travel">Travel</Link></Button>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper2}>
                  <Paper elevation={0} className={classes.paper3}>
                    <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar2}/>
                    <Typography variant="body1" style={{width: "30vw", marginLeft: "auto", marginRight:"auto", color: "#EEB868", marginTop: "5vh", textAlign: "center"}}>Hello World. Welcome to my Lala-Land where I am unrestrictedly and unapologetically me. Find out more about me through my many other hobbies. I hope to connect with you at some level !</Typography>
                  </Paper>
                </Paper>
            </Grid>
            
            <Grid item>
                <Paper elevation={0} className={classes.paper1} style={{ top: "0",}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "3vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                </Paper>
            </Grid>
            
        </Grid>
        <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "25vh", width: "100vw"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           <Button style={{color: "#EF767A"}}>Email</Button>
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button>
       </div>
      </div>
      
    );
  };
  
  export default About;
