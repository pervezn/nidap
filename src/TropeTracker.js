import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
// import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { typeAlias } from '@babel/types';
import {Route, Link} from 'react-router-dom';
 
const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};
 
const useStyles = makeStyles({
  avatar1: {
      width: 100,
      height: 100,
      marginTop: "1vw",
      marginLeft: "auto",
      marginRight:"auto",
  },
  paperMaster: {
   textAlign: "center",
   color: "#000000",
 },
  paper1:{
      width: "20vw",
      height: "300px",
      position: "fixed",
     
  },
paper2: {
     width: "60vw",
     height: "100%",
     borderRadius: "0px",
     paddingTop: "10vw",
    
  },
 paper3: {
   height:"40vh",
   width: "50vw",
   border: "1px solid #55769A",
   flexDirection: "row",
   display: "flex",
   
 },
  paper4: {
     height: "15vh",
     display:"inline-block",
     textAlign: "left",
     color: "#55769A",
   },
 paper5:{
   width: "10vw",
 },
 paper6:{
   width: "40vw",
   height: "100%",
 },
  paper7: {
   display:"inline-block",
   textAlign: "left",
   color: "#55769A",
 },
  paper8: {
     width: "50vw",
     textAlign: "left",
     marginTop: "4vw",
     marginLeft: "10vw",
     color: "#55769A",
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
  }

})


  

const TropeTracker = ()  => {
   const classes = useStyles();
 
   return (
         <div className="TropeTracker">
            <div>
           <Grid container>
               <Grid item>
               <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/">Home</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/factflow">Fact Flow</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/projects/tropetracker">Trope Tracker</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/internships">internships</Link></Button>
                    <Button className={classes.button1} ><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
                </Paper>
               </Grid>
              <Grid item style={{marginLeft: "20vw"}}>
                <Paper elevation={0} className={classes.paper2}>
                  <Paper elevation={0} className={classes.paper4} style={{width: "15vw",textAlign:"center"}}>
                      <img src={"../Pictures/TT9.png"} style={{height:"100%",  alignContent:"right"}}/>
                  </Paper>
                  <Paper elevation={0} className={classes.paper4} style={{width: "35vw"}}>
                      <Typography variant="h3" style={{marginTop: "0px", paddingTop: "0px", color: "#EF767A"}}>Northwestern University: Trope Tracker</Typography>
                  </Paper>
                  <Paper elevation={0} className={classes.paper7} style={{width: "11vw" }}>
                    <Typography variant="body2" style={{paddingBottom:"1vw",fontWeight:"bold"}}>Winter 2019</Typography>
                    <Typography variant="body2" style={{fontWeight:"bold"}}>Team Members:</Typography>
                    <Typography variant="body2">Brendan Labadie</Typography>
                    <Typography variant="body2">Remy Afong</Typography>
                    <Typography variant="body2">Albert Dotson</Typography>
                 </Paper>
                  <Paper elevation={0} className={classes.paper7} style={{width: "30vw"}}>
                      <Typography variant="body1" style={{paddingBottom:"2vw",paddingTop:"4vw"}}>Practicum in Intelligent Information Systems is a class offered at Northwestern that focuses on areas of information access, management, capture, or retrieval. Within these focus-areas, students are expected to present a project definition, a technology selection, data collection, implementation, and project management.</Typography>
                      <Typography variant="h6" style={{paddingBottom:"2vw",}}>Project Overview</Typography>
                      <Typography variant="body1"  >
                      Trope Tracker is a tool that discovers trope-article association via crowdsourced Twitter data. A trope is figurative or metaphorical use of a word or expression. Some common tropes are “a needle in a haystack”, or “David vs. Goliath”. Our goal is to identify tropes or trope ideas in articles and vice versa; to find articles by looking up tropes. The idea behind Trope Tracker is to see how people are using tropes and how common they are today.
                      </Typography>
                  </Paper >
                  <Paper elevation={0} className={classes.paper8}>
                      <Typography variant="body1">Example Use Cases</Typography>
                      <Typography variant="body1" style={{marginTop:"vw",}}>1. User wants to know what a story is about before reading it, e.g. news story about an individual winning a lawsuit against Facebook summarizes as David vs. Goliath</Typography>
                      <Typography variant="body1" style={{marginTop:"1vw",}}>2. User wants to view stories classified as the same trope, e.g. English teachers design a literary analysis exercise for students to compare and contrast stories labeled as the same trope (characters, plot, etc.)</Typography>
     
                      <Typography variant="h6" style={{marginTop: "2vw"}}> My Role</Typography>
                      <Typography>As a four person team with much ground to cover, my role was quite dynamic. During this project, my tasks ranged from connecting to our database, research, frontend, and creating a complimentary chrome extension. However, due to time constraints, we were unable to fully publish he chrome extension</Typography>
                      <Typography variant="h6" style={{marginTop: "2vw"}}> Design Process</Typography>
                      <Typography>
                      Designing for this project was an interesting challenge because we needed to find an intuitive way to provide two different search methods. In the first method, we wanted to allow users to provide a link to an article and then Trope Tracker would display the tropes used in the article. The second method is more of a browsing method where tropes are provided and users can search for a trope in our list and browse through the tweets that contain articles with those tropes. Our first UI sketches explored these ideas:
                      </Typography>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Home Screen</Typography>
                      <img src={"../Pictures/TT1.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Article Search</Typography>
                      <img src={"../Pictures/TT2.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Trope Search</Typography>
                      <img src={"../Pictures/TT3.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Chrome Extension</Typography>
                      <img src={"../Pictures/TT4.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>One challenge that we faced in terms of UI was displaying both the articles and the tweets associated with them on the same page. Our initial idea was to place them under the article name, but that caused friction as users would have to scroll a lot to reach the next article. We settled on creating a hamburger-menu styled pop-out that would display the tweets.</Typography>
                      <img src={"../Pictures/TT5.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>This allowed users to easily view the tweets on the side without having to move around the page too much. </Typography>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>For the rest of our design, we stuck to a simple and minimalistic design, highlighting only the most necessary pieces of information.</Typography>
                      <img src={"../Pictures/TT6.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <img src={"../Pictures/TT7.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Our tech stack for this project included: ReactJS (frontend), NodeJS/Python (backend), Firebase (database), Twitter API ($$$), Newsbot (Chrome extension)</Typography>
                      <Typography variant="body1" style={{marginTop: "5vh"}}>Technical Architecture:</Typography>
                      <img src={"../Pictures/TT8.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
                      <Button onClick={() => {window.open('https://trope-tracker-62549.firebaseapp.com/#/')}} style={{color: "#EEB868"}}><Typography variant="body1" style={{marginTop: "5vh"}}>Visit Trope Tracker</Typography></Button>
                  </Paper>
                </Paper>
              </Grid>
               <Grid item>
                   <Paper elevation={0} className={classes.paper1} style={{top: "0"}}>
                      <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                       <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/about"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                       
                   </Paper>
               </Grid>
           </Grid>
           </div>
           <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "15vh"}}>
               <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
               <Link style={{color: "#55769A", textDecoration: "none"}} to="/Resume"><Button style={{color: "#EF767A"}}>Resume</Button></Link>
               <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
               {/* <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button> */}
           </div>
         </div>
         );
     };
  export default TropeTracker;


