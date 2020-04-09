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
 paperMaster: {
   // padding: "2vw",
   textAlign: "center",
   color: "#000000",
   // background: "#A0DB9E",
   // border: "5px solid black",
 },
 paper1: {
   // height:"100%",
   height: "100%",
   width: "30vw",
   // borderLeft: "25px solid #55769A",
   borderRadius: "0px",
 },
 paper2:{
   height:"65vh",
   width: "20vw",
   // background: "#55769A",
   paddingTop: "10vw",
   marginLeft: "10vw",
   display: "sticky",
   textAlign: "left",
 },
 paper3: {
   width: "60vw",
   height: "100%",
   // backgroundColor: "lightpink",
   borderRadius: "0px",
   paddingTop: "10vw",
  
 },
 paper4: {
   // width: "40vw",
   height: "15vh",
   // backgroundColor: "lightgreen",
   // borderRadius: "0px",
   display:"inline-block",
   textAlign: "left",
   // position: "fixed",
   color: "#55769A",
 },
 paper5: {
   display:"inline-block",
   textAlign: "left",
   color: "#55769A",
 },
 paper6: {
   width: "50vw",
   textAlign: "left",
   marginTop: "4vw",
   marginLeft: "10vw",
   color: "#55769A",
 },
 button1: {
   display: "block",
   color: "#49BEAA",
   fontSize: "20px"
 },
 button2: {
   // marginBottom: "2vw",
   display: "block",
   color: "#49BEAA",
   marginLeft: "2vw",
   fontSize: "20px"
 },
})
 
const FactFlow = ()  => {
   const classes = useStyles();
 
   return (
     <Grid container style={{ borderLeft: "25px solid #55769A",}}>
       <Grid item>
         <Paper elevation={0} className={[classes.paper1, classes.paperMaster]}>
           <Paper elevation={0} className={classes.paper2} style={{position: "-webkit-sticky", position: "sticky", top: "0"}}>
             <Button className={classes.button1}> <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/">Home</Link></Button>
             <Button className={classes.button1}>  <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/about">About</Link></Button>
             <Button className={classes.button1}>Resume</Button>
             <Button className={classes.button1}>  <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/projects">Projects</Link></Button>
             <Button className={classes.button2} style={{color: "#EEB868"}}>Fact Flow</Button>
             <Button className={classes.button2}><Link style={{color: "#49BEAA", textDecoration: "none"}} to="/projects/tropetracker">Trope Tracker</Link></Button>
             <Button className={classes.button2}><Link style={{color: "#49BEAA", textDecoration: "none"}} to="/projects/internships">Internships</Link></Button>
             {/* <Button className={classes.button2}>Allstate</Button> */}
           </Paper>
         </Paper>
       </Grid>
       {/* <Paper elevation={0}>Hello</Paper> */}
       <Grid item>
         <Paper elevation={0} className={classes.paper3}>
           <Paper elevation={0} className={classes.paper4} style={{width: "15vw",textAlign:"center"}}>
               <img src={"../Pictures/knightLab.jpg"} style={{height:"100%",  alignContent:"right"}}/>
           </Paper>
           <Paper elevation={0} className={classes.paper4} style={{width: "35vw"}}>
               <Typography variant="h3" style={{marginTop: "0px", paddingTop: "0px", color: "#EF767A"}}>Northwestern Knight Lab: Fact Flow</Typography>
           </Paper>
           <Paper elevation={0} className={classes.paper5} style={{width: "11vw", }}>
               <Typography variant="body2" style={{paddingBottom:"1vw",fontWeight:"bold"}}>Spring 2019</Typography>
               <Typography variant="body2" style={{fontWeight:"bold"}}>Team Members:</Typography>
               <Typography variant="body2">Sabreen Ali</Typography>
               <Typography variant="body2">Caryl Henry</Typography>
               <Typography variant="body2">Rachel Oh</Typography>
               <Typography variant="body2">Kiara Joseph</Typography>
               <Typography variant="body2">Nina Cong</Typography>
               <Typography variant="body2">Manisha Taparia</Typography>
           </Paper>
           <Paper elevation={0} className={classes.paper5} style={{width: "30vw"}}>
               <Typography variant="body1" style={{paddingBottom:"2vw",paddingTop:"4vw"}}>
               The Knight Lab is a community at Northwestern that harnesses technology and integrates it with journalism in new and innovative ways. Fact Flow was a project supported by this community.
               </Typography>
               <Typography variant="h6" style={{paddingBottom:"2vw",}}>Project Overview</Typography>
               <Typography variant="body1" >
               Fact-checking refers to verifying all factual content in an article before it gets published. This is a common practice in the world of journalism. The traditional practices are often a messy and non-transparent process; even non-existent for web news organizations. Our team’s task was to create a solution to streamline and organize this process in 10 weeks. Our solution was to make a Google Doc plugin that streamlines and digitizes the fact-checking process for the editorial team (writer, editor, fact-checker).
               </Typography>
           </Paper >
           <Paper elevation={0} className={classes.paper6}>
               <Typography variant="h6" style={{marginTop: "2vw"}}> My Role</Typography>
               <Typography>My role on this team was in two parts. I worked on the engineering - creating the google add-on front-end, using GoogleScript and connecting it to our firebase backend - and I also had part in the design of the add-on. More specifically….</Typography>
               <Typography variant="h6" style={{marginTop: "2vw"}}> Design Process</Typography>
               <Typography style={{marginTop: "2vw"}}>
               Designing for this particular problem was particularly difficult because there is no universal strategy or process that fact-checkers follow. Every individual’s process could have completely separate criteria, or abbreviations. One person could circle misspelled words while another highlights them with a specific color. Some people use only one color throughout the whole process while others have a color coded key. Our job was not only to design a tool to help streamline this process, but also to make a universally accepted process to fact-checking. This proved to be the most difficult aspect of the design process, because we initially were not sure if we should make our product flexible or strict. Through many cycles of iterative design, we found a method that worked cohesively for us.
               </Typography>
               <img src={"../Pictures/FF8.png"} style={{width:"100%",  alignContent:"right", marginTop: "2vw"}}/>
               <Typography style={{marginTop: "3vw"}}>
               When it comes to fact-checking, all information is checked. This means quotes, names, dates, weather, measurements and conversions, spellings, historical quotes assumed to be true, even things you know are true and more. We initially started with a design that allowed the users to customize all their highlighting and input information as they saw fit.
               </Typography>
               <img src={"../Pictures/FF3.png"} style={{width:"100%",  alignContent:"right", marginTop: "3vw"}}/>
               <Typography variant="body2">(Iteration 1)</Typography>
               <img src={"../Pictures/FF4.png"} style={{width:"100%",  alignContent:"right", marginTop: "3vw"}}/>
               <img src={"../Pictures/FF5.png"} style={{width:"100%",  alignContent:"right", marginTop: "3vw"}}/>
               <Typography variant="body2">(Iteration 2; highlighting and adding information)</Typography>
               <Typography style={{marginTop: "2vw"}}>
               However, this implementation was not realistic in terms of storing and retrieving information from our database. We then pivoted to a more structured approach. This method was good, because it allowed for uniformity but also gave the option to input any additional information that was missing.
               </Typography>
               <img src={"../Pictures/FF1.jpg"} style={{width:"40%",  alignContent:"right", marginTop: "3vw"}}/>
               <Typography variant="body2">(Iteration 2; paper-prototype)</Typography>
               <div style={{display: "in-line",  marginTop: "3vw"}}>
                 <img src={"../Pictures/FF6.png"} style={{width:"40%",  alignContent:"right"}}/>
                 <img src={"../Pictures/FF7.png"} style={{width:"40%",  alignContent:"right", marginLeft: "10vw"}}/>
               </div>
               <Typography style={{marginTop: "2vw"}}>
               Another challenge was the limiting factors of Google Add-ons and GoogleScript and the lack of documentation. Though the learning curve was steep, we were able to create an MVP by the end of our term.
               </Typography>
           </Paper>
         </Paper>
       </Grid>
       <Paper elevation={0} style={{display: "inline-block", width: "100%", marginTop: "5vh"}}>
        <div style={{float: "right", width: "50%"}}>
          <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#55769A"}}>LinkedIn</Button>
          <Button style={{color: "#55769A"}}>Email</Button>
          <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#55769A"}}>Github</Button>
          <Button><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand">Lala-Land</Link></Button>
        </div>
      </Paper>
     </Grid>
   );
 };
 
 
 
  export default FactFlow;
