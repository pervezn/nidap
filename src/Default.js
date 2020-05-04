import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "../node_modules/video-react/dist/video-react.css";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import firebase from 'firebase/app';
import 'firebase/database';
import Movies from "./Movies"
import Photos from "./Photos"
import Writing from "./Writing"
import Travel from "./Travel"
import Projects from "./Projects"
import About from "./About"
import Resume from "./Resume"


const menuItems = { H: "Home", Pr: "Projects", M: "Movies", P: "Photos", W: "Writing", T: "Travel"}

const useStyles = makeStyles({
    paper: {
      height: 140,
      width: 100,
    },
    avatar1: {
        width: 100,
        height: 100,
        marginTop: "1vw",
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
        marginTop: "20vh"
    },
    paper3:{
      marginTop:"5vh",
      width: "40vw",
      color: "#55769A",
      marginLeft: "10vw"
    },
    paper4: {
      width: "40vw",
      marginTop: "5vh",
      marginLeft: "10vw",
      textAlign: "left",
      color: "#55769A",
    },
    grid1:{
      width: "50vw",
      height: "100%",
      // backgroundColor: "blue",
    },
    paper5: {
      height: "140px",
      width: "100px",
    },
    button1: {
        display: "block",
        marginLeft: "5vw",
    }

});

const colortheme = createMuiTheme({
    palette: {
      primary: { main: "#55769A", contrastText: "#fff" },
      secondary: { main: "#EEB868", contrastText: "#fff" }
    }
  });

const buttonColor = selected => (
    // console.log("in button color")
    selected ? "secondary" : "primary"
);

const ResumeSelector = ({state}) => {
 
  return (
    <Button 
    onClick={() => state.setMenu("Resume")} 
    style={{color: "#EF767A"}}>
      Resume
    </Button>
  )

}

const AboutSelector = ({state}) => {
  const classes = useStyles();

  return (
  <Button onClick={ () => state.setMenu("About") }> 
  {/* <Link style={{color: "#55769A", textDecoration: "none"}} to="/about/"> */}
    <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/>
  {/* </Link> */}
  </Button>
)};


const MenuSelector = ({ state }) => {
    const classes = useStyles();

return (
    <MuiThemeProvider theme={colortheme}>
      { Object.values(menuItems)
          .map(value => <Button key={value} 
            className={classes.button1}
            color={ buttonColor(value === state.menu) }
            onClick={ () => state.setMenu(value) }
            >{ value }</Button>
          )
      }
    </MuiThemeProvider>
)};

const BodySelector = ({state}) => {
  const [currState, setCurrState] = useState();
  var test = <React.Fragment/>
  switch(state) {
    case "Home": 
      test = <React.Fragment/>
      break;
    case "Projects": 
      test = <Projects/>
      break;
    case "Movies": 
      test = <Movies/>
      break;
    case "Photos": 
      test = <Photos/>
      break;
    case "Writing": 
      test = <Writing/>
      break;
    case "Travel": 
      test = <Travel/>
      break;
    case "About":
      test = <About/>
      break;
    case "Resume":
      test = <Resume/>
      break;

  }
  return (
      <React.Fragment>
        {test}
      </React.Fragment>

  )
}

const Default = ()  => {
    const classes = useStyles();
    const [menu, setMenu] = useState();
    const [currPage, setCurrPage] = useState();
   
    return (
      <div className="Default">
        <Grid container style={{height: "100%"}}>
            <Grid item>
                <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}> 
                    <MenuSelector state={{menu, setMenu}} />
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper2}>
                  {console.log("menu is: " + menu)}
                  <BodySelector state={menu} />
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper1} style={{ top: "0",}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                    <AboutSelector state={{menu, setMenu}}/>
                </Paper>
            </Grid>
            
        </Grid>
        <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "25vh", width: "100vw"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           {/* <Link style={{color: "#55769A", textDecoration: "none"}} to="/Resume"> */}
             <ResumeSelector state={{menu,setMenu}}/>
             {/* </Link> */}
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
       </div>
      </div>
      
    );
  };
  
  export default Default;
