import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
 
const useStyles = makeStyles({
   avatar1: {
       width: 200,
       height: 200,
       marginTop: "2vw",
       display: "felx",
       // justifyContent: "center"
       marginLeft: "auto",
       marginRight:"auto"
   },
   paper1:{
       marginTop:"5vh",
       width: "40vw",
       // textAlign: "center",
       marginLeft: "30vw"
   },
   Typography:{
       fontStyle: "Lucida Grande"
   }
 
})
const LalaLand = ()  => {
   const classes = useStyles();
   return (
     <div className="LalaLand">
       <Paper elevation={0} className={classes.paper1}>
           <Typography variant="h3" style={{color: "#EEB868", textAlign: "center"}}>Lala-Land</Typography>
           <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1} />
           {/* style={{marginTop: "15vh"}} */}
           <Typography variant="body1" style={{width: "30vw", marginLeft: "auto", marginRight:"auto", color: "#EEB868", marginTop: "5vh", textAlign: "center"}}>Hey friends! My name’s Nida Pervez. I’m currently wrapping up my final year at Northwestern University, studying Computer Science and Chinese. Check out my past projects, internships, and creative ventures! I hope to connect with you at some level :)</Typography>
       </Paper>
       <div style={{display: "inline-box", marginTop: "10vh", width: "100%"}}>
          <Button style={{ fontSize: "large"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
          <Button style={{color: "#55769A", fontSize: "large", marginLeft: "3vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/about">About</Link></Button>
          <Button style={{color: "#55769A", fontSize: "large", marginLeft: "3vw"}}>Resume</Button>
       </div>
       <div style={{display: "inline-box", marginTop: "5vh", width: "100%"}}>
           {/* <div style={{float: "right", width: "50%"}}> */}
           <Button style={{ fontSize: "large"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Movies">Movies</Link></Button>
           <Button style={{color: "#55769A", fontSize: "large", marginLeft: "3vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Photos">Photos</Link></Button>
           <Button style={{color: "#55769A", fontSize: "large", marginLeft: "3vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Writing">Writing</Link></Button>
           <Button style={{color: "#55769A", fontSize: "large", marginLeft: "3vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Travel">Travel</Link></Button>
           {/* </div> */}
       </div>
     </div>
    
   );
 };
  export default LalaLand;
