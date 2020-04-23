import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import paper from "paper";
import view from "paper";
import Raster from "paper";

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


const Balloon = ({}) => {
  paper.install(window)
  // {const canvas = document.getElementById("myCanvas") //maybe it doesn't know where to look?
  // console.log("canvas is: " + canvas)}

  paper.setup('myCanvas')

  const screenW = view.size.width;
  const screenH = view.size.height;  

  const random = function(min, max) {
    return Math.floor((Math.random() * (max + 1 - min) + min));
  };
  const randomDecimal = function(min, max) {
    return (Math.random() * (max - min) + min);
  };
  
  const generateBalloon = function(x, y, imageURL, speed, scaleFactor) {
    const raster = new Raster({
        source: imageURL,
        position: [x, y]
    });
    raster.scale(scaleFactor);
    return {
        item: raster,
        speed: speed
    };
  };
  
  const generateBalloons = (num) => {
    const balloons = [];
    for (let i = 0; i < num; ++i) {
        //make a left moving fish and add it to the array:
        let x = random(0, screenW);
        let y = random(0, screenH);
        let url = "https://images.vexels.com/media/users/3/151048/isolated/preview/a9ef9a87f927b3cadc76a64977210663-hot-air-balloon-illustration-hot-air-balloon-by-vexels.png";
        let balloon = generateBalloon(x, y, url, -1 * randomDecimal(.2, 2), randomDecimal(0.3, 0.8));
        balloons.push(balloon);
    }
    return balloons;
  };
  
  const balloons = generateBalloons(3);
  
  var moveBalloon = function (balloon) {
    balloon.item.position.y += Math.sin(balloon.speed) * 5;
    if (balloon.item.position.y < -100 ) {
        balloon.item.position.y = screenH + 100;
    }
  };

  view.onFrame = (event) => { for (const balloon of balloons) {moveBalloon(balloon)}}

  return (
      <React.Fragment></React.Fragment>
  )
}


const Home = ()  => {
   const classes = useStyles();
   return (
     <div className="Home">
       <canvas id="myCanvas" style={{top: "0px", left: "0px", width: "100vw",height: "100vh", zIndex: "-5", position: "fixed"}}></canvas>
       {/* {console.log("hereeee")} */}
       { //maybe it doesn't know where to look?
        console.log("canvas is: " + document.getElementById("myCanvas"))}
       <Balloon/>
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
