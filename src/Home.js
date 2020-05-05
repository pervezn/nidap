import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import {useSpring, animated, useTransition} from 'react-spring'
// import paper from "paper";
// import view from "paper";
// import Raster from "paper";
// import styles from "./balloon.css"
import Balloon from "./styles/Balloon";

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
   },
  
})

{document.title = "Nida Pervez"}


// const Balloon =  ({}) => {
//   paper.install(window)
//   // {const canvas = document.getElementById("myCanvas") //maybe it doesn't know where to look?
//   // console.log("canvas is: " + canvas)}
// // const innit = () =>{
//   paper.setup('myCanvas')
//   const screenW = view.size.width;
//   const screenH = view.size.height;  

//   const random = function(min, max) {
//     return Math.floor((Math.random() * (max + 1 - min) + min));
//   };
//   const randomDecimal = function(min, max) {
//     return (Math.random() * (max - min) + min);
//   };
  
//   const generateBalloon = function(x, y, imageURL, speed, scaleFactor) {
//     const raster = new Raster({
//         source: imageURL,
//         position: [x, y]
//     });
//     raster.scale(scaleFactor);
//     return {
//         item: raster,
//         speed: speed
//     };
//   };
  
//   const generateBalloons = (num) => {
//     const balloons = [];
//     for (let i = 0; i < num; ++i) {
//         //make a left moving fish and add it to the array:
//         let x = random(0, screenW);
//         let y = random(0, screenH);
//         let url = "https://images.vexels.com/media/users/3/151048/isolated/preview/a9ef9a87f927b3cadc76a64977210663-hot-air-balloon-illustration-hot-air-balloon-by-vexels.png";
//         let balloon = generateBalloon(x, y, url, -1 * randomDecimal(.2, 2), randomDecimal(0.3, 0.8));
//         balloons.push(balloon);
//     }
//     return balloons;
//   };
  
//   const balloons = generateBalloons(3);
  
//   var moveBalloon = function (balloon) {
//     balloon.item.position.y += Math.sin(balloon.speed) * 5;
//     if (balloon.item.position.y < -100 ) {
//         balloon.item.position.y = screenH + 100;
//     }
//   };

//   view.onFrame = (event) => { for (const balloon of balloons) {moveBalloon(balloon)}}

// // }
  
//   // setTimeout(innit, 1000);
//   return (
//     // <div>
//       <script src='https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.24/paper-core.min.js'></script>
//     // </div>
//   )
// }

const ToProjects = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Projects")} className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
        <img src={"../Pictures/ProjectIcon.png"} style={{width:"50%"}}/>
        <Typography>Projects</Typography>
      </Link>
    </Button>
  )
}

const ToAbout = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("About")} className={classes.button1} >
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
        <img src={"../Pictures/AboutMeIcon.png"} style={{width:"40%"}}/>
        <Typography>About</Typography>
      </Link>
    </Button>
  )
}

const ToResume = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Resume")} className={classes.button1} >
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
        <img src={"../Pictures/ResumeIcon.png"} style={{width:"30%"}}/>
        <Typography>Resume</Typography>
      </Link>
    </Button>
  )
}

const ToMovies = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Movies")} className={classes.button1}>
        <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
        <img src={"../Pictures/MoviesIcon.png"} style={{width:"40%"}}/>
          <Typography>Movies</Typography>
        </Link>
    </Button>
  )
}

const ToPhotos = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Photos")} className={classes.button1}>
          <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
          <img src={"../Pictures/PhotosIcon.png"} style={{width:"50%"}}/>
          <Typography>Photos</Typography>
          </Link>
        </Button>
   )
}

const ToWriting = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Writing")} className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
      <img src={"../Pictures/WritingIcon.png"} style={{width:"30%"}}/>
      <Typography>Writing</Typography>
      </Link>
  </Button>
  )
}

const ToTravel = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => state.setCurrPage("Travel")} className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: state // your data array of objects
                                                                  }}>
        <img src={"../Pictures/TravelIcon.png"} style={{width:"40%"}}/>
        <Typography>Travel</Typography>
      </Link>
    </Button>
  )
}

const Home = ()  => {
   const classes = useStyles();
   const [currPage, setCurrPage] = useState();
   const [isToggled, setToggle] = useState(false);
   const fade = useSpring({from: { opacity: 0 }, opacity: 1})
   const fly = useSpring({
    //  opacity: isToggled ? 1 : 0,
    from: { transform: 'translate3d(0,-100,0)'  }, to: { transform: 'translate3d(0,100vh,0)' }
    //  transform: isToggled ? 'translate3d(0,-100,0)' : 'translate3d(0,100vh,0)' 
    })


   return (
     <div className="Home" >
      <Paper elevation={0} className={classes.paper1} style={{marginTop: "15vh"}}>
           <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1} />
           <Typography variant="body1" style={{width: "30vw", marginLeft: "auto", marginRight:"auto", color: "#EEB868", marginTop: "5vh", textAlign: "center"}}>Hey friends! My name’s Nida Pervez. I’m currently wrapping up my final year at Northwestern University, studying Computer Science and Chinese. Check out my past projects, internships, and creative ventures! I hope to connect with you at some level :)</Typography>
       </Paper>
      
       <div style={{display: "inline-box", marginTop: "15vh", width: "100%",}}>
        <ToProjects state={{currPage, setCurrPage}}/>
        <ToAbout state={{currPage, setCurrPage}}/>
        <ToResume state={{currPage, setCurrPage}}/>
       </div>
       <Balloon/>
       <div style={{display: "inline-box", marginTop: "7vh", width: "100%"}}>
        <ToMovies state={{currPage, setCurrPage}}/>
        <ToPhotos state={{currPage, setCurrPage}}/>
        <ToWriting state={{currPage, setCurrPage}}/>
       </div>
       <div style={{display: "inline-box", marginTop: "3vh", width: "100%", marginBottom: "7vh"}}> 
        <ToTravel state={{currPage, setCurrPage}}/>
       </div> 
     </div>
    
   );
 };
  export default Home;
