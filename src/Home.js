import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';

// import Balloon from './Balloon';
 
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
   },
   button1: {
     width: "15vw",
     height: "15vh",
     color: "#55769A", 
     fontSize: "large"
   }
 
})

{document.title = "Nida Pervez"}

const Home = ()  => {
   const classes = useStyles();
   return (
     <div className="Home">
       {/* <Balloon/> */}
       <Paper elevation={0} className={classes.paper1} style={{marginTop: "15vh"}}>
           <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1} />
           <Typography variant="body1" style={{width: "30vw", marginLeft: "auto", marginRight:"auto", color: "#EEB868", marginTop: "5vh", textAlign: "center"}}>Hey friends! My name’s Nida Pervez. I’m currently wrapping up my final year at Northwestern University, studying Computer Science and Chinese. Check out my past projects, internships, and creative ventures! I hope to connect with you at some level :)</Typography>
       </Paper>
       <div style={{display: "inline-box", marginTop: "15vh", width: "100%",}}>

        <Button className={classes.button1}>
          <Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">
            <img src={"../Pictures/ProjectIcon.png"} style={{width:"50%"}}/>
            <Typography>Projects</Typography>
          </Link>
        </Button>

        <Button className={classes.button1} >
          <Link style={{color: "#55769A", textDecoration: "none"}} to="/about">
            <img src={"../Pictures/AboutMeIcon.png"} style={{width:"40%"}}/>
            <Typography>About</Typography>
          </Link>
        </Button>

        <Button className={classes.button1} >
          <Link style={{color: "#55769A", textDecoration: "none"}} to="/Resume">
            <img src={"../Pictures/ResumeIcon.png"} style={{width:"30%"}}/>
            <Typography>Resume</Typography>
          </Link>
        </Button>

       </div>
       <div style={{display: "inline-box", marginTop: "7vh", width: "100%"}}>
    
           <Button className={classes.button1}>
             <Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">
             <img src={"../Pictures/MoviesIcon.png"} style={{width:"40%"}}/>
               <Typography>Movies</Typography>
              </Link>
          </Button>

          <Button className={classes.button1}>
            <Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">
            <img src={"../Pictures/PhotosIcon.png"} style={{width:"50%"}}/>
            <Typography>Photos</Typography>
            </Link>
          </Button>

          <Button className={classes.button1}>
            <Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">
            <img src={"../Pictures/WritingIcon.png"} style={{width:"30%"}}/>
            <Typography>Writing</Typography>
            </Link>
          </Button>
           
       </div>
       <div style={{display: "inline-box", marginTop: "3vh", width: "100%", marginBottom: "7vh"}}>
          <Button className={classes.button1}>
            <Link style={{color: "#55769A", textDecoration: "none"}} to="/Travel">
            <img src={"../Pictures/TravelIcon.png"} style={{width:"40%"}}/>
            <Typography>Travel</Typography>
              
            </Link>
          </Button>
       </div>
     </div>
    
   );
 };
  export default Home;
