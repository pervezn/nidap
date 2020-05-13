import React, { useEffect, useState }  from 'react';

// import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Avatar, Typography, Button, } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
// import {useSpring, animated, useTransition} from 'react-spring'
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


const ToProjects = ({state}) => {
  const classes = useStyles();
  return (
    <Button onClick={() => 
    {
    state.setCurrPage("Projects")
    console.log("state.currPage is: ", state.currPage)
  }} 
    className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Projects"// your data array of objects
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
    <Button className={classes.button1} >
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "About" // your data array of objects
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
    <Button className={classes.button1} >
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Resume" // your data array of objects
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
    <Button className={classes.button1}>
        <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Movies" // your data array of objects
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
    <Button className={classes.button1}>
          <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Photos" // your data array of objects
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
    <Button className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Writing" // your data array of objects
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
    <Button className={classes.button1}>
      <Link style={{color: "#55769A", textDecoration: "none"}} to={{
                                                                    pathname: "/Default",
                                                                    data: "Travel" // your data array of objects
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
   {console.log("In Home: currPage is: " + currPage)}
  //  const [isToggled, setToggle] = useState(false);
  //  const fade = useSpring({from: { opacity: 0 }, opacity: 1})
  //  const fly = useSpring({
  //   //  opacity: isToggled ? 1 : 0,
  //   from: { transform: 'translate3d(0,-100,0)'  }, to: { transform: 'translate3d(0,100vh,0)' }
  //   //  transform: isToggled ? 'translate3d(0,-100,0)' : 'translate3d(0,100vh,0)' 
  //   })


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
