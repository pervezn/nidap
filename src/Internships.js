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
      marginTop: "2vw",
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
      height: "300px",
      position: "fixed",
     
  },
paper2: {
     width: "60vw",
     height: "100%",
     // backgroundColor: "lightpink",
     borderRadius: "0px",
     paddingTop: "10vw",
    //  marginTop: "20vh",
    //  border: "1px solid black",
    
  },
 paper3: {
   height:"40vh",
   width: "50vw",
  //  border: "1px solid #55769A",
   flexDirection: "row",
   display: "flex",
   
 },
  paper4: {
     // width: "40vw",
     height: "15vh",
    //  backgroundColor: "lightgreen",
     // borderRadius: "0px",
     display:"inline-block",
     textAlign: "left",
     // position: "fixed",
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
     width: "60vw",
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
      // backgroundColor: theme.palette.background.paper,
  }

})





const Internships = ()  => {
   const classes = useStyles();
 
   return (      
         <div className="Internships">
            <div>
           <Grid container>
               <Grid item>
               <Paper elevation={0} className={classes.paper1}  style={{bottom: "0"}}>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/factflow">Fact Flow</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects/tropetracker">Trope Tracker</Link></Button>
                    <Button className={classes.button1} style={{marginLeft: "7vw"}}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/projects/internships">internships</Link></Button>
                    <Button className={classes.button1} ><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Movies">Movies</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Photos">Photos</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Writing">Writing</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Travel">Travel</Link></Button>
                </Paper>
               </Grid>
              <Grid item style={{marginLeft: "20vw"}}>
                <Paper elevation={0} className={classes.paper2}>
                  <Paper elevation={0} className={classes.paper7} style={{width: "30vw"}}>
                  <Paper elevation={0} className={classes.paper3}>
                    <Paper elevation={0} className={classes.paper4} style={{width: "15vw",textAlign:"center"}}>
                        {/* <img src={"../Pictures/knightLab.jpg"} style={{height:"100%",  alignContent:"right"}}/> */}
                    </Paper>
                    <Paper elevation={0} className={classes.paper4} style={{width: "35vw"}}>
                        <Typography variant="h3" style={{marginTop: "0px", paddingTop: "0px", color: "#EF767A"}}>Internships</Typography>
                    </Paper>
                   
                    <Paper elevation={0} className={classes.paper8}></Paper>
                  </Paper>
                  </Paper >
                  <Paper elevation={0} className={classes.paper8}>

                  <Paper elevation={0} className={classes.paper7} style={{width: "11vw", }}>
                        APPLE
                      
                    </Paper>
                    <Paper elevation={0} className={classes.paper7} style={{width: "30vw"}}>
                        ALLSTATE
                    </Paper >
                      <Typography variant="h6" style={{marginTop: "2vw"}}> My Role</Typography>
                      <Typography variant="h6" style={{marginTop: "2vw"}}> Design Process</Typography>
                  </Paper>
                </Paper>
              </Grid>
               <Grid item>
                   <Paper elevation={0} className={classes.paper1} style={{top: "0"}}>
                       <Typography variant="h5" style={{color: "#EEB868", marginTop: "3vh"}}>Nida Pervez</Typography>
                       <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                   </Paper>
               </Grid>
           </Grid>
           </div>
           <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "15vh"}}>
               <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
               <Button style={{color: "#EF767A"}}>Email</Button>
               <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
               <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button>
           </div>
         </div>
      
       );
     };
  export default Internships;


 
 
 


 
   
    
