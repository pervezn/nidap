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
    root: {
      // flexGrow: 1,
      // display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-around',
      // overflow: 'hidden',
      // marginTop: "20vh",
      // marginLeft: "20vw",
    },
    paper: {
      height: 140,
      width: 100,
    },
    avatar1: {
        width: 100,
        height: 100,
        // marginTop: "2vw",
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

const tileData = [
     
  {
   img: '../Pictures/forman.jpg',
   title: '1',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/lecture.JPG',
   title: '2',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/malala.jpg',
   title: '3',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/malcolm.JPG',
   title: '4',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/michelle.jpg',
   title: '5',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/mock.JPG',
   title: '6',
   author: 'Nida',
   cols: 2,
 },
 {
   img: '../Pictures/morrie.JPG',
   title: '7',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/obama.jpg',
   title: '8',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/ornament.jpg',
   title: '9',
   author: 'Nida',
   cols: 1,
 },
 {
   img: '../Pictures/piri.jpg',
   title: '10',
   author: 'Nida',
   cols: 1,
 },
 {
  img: '../Pictures/alchemist.jpg',
  title: '11',
  author: 'Nida',
  cols: 1,
},
];


const About = ()  => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = event => {
      setSpacing(Number(event.target.value));
    };

    
    return (
      <div className="About">
        <Grid container style={{height: "100%"}}>
            <Grid item>
                <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}> 
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper2}>
                  <Paper elevation={0} className={classes.paper3}>
                    <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar2}/>
                    <Typography variant="h2" style={{width: "30vw", marginLeft: "auto", marginRight:"auto", color: "#EEB868", marginTop: "5vh", textAlign: "center"}}>
                      Hi Friends!
                    </Typography>
                  </Paper>
                  <Paper elevation={0} className={classes.paper4}>
                    <Typography variant="body1" style={{marginTop: "8vh"}}>I’m Nida, a software engineer working at Groupon as Front-end developer! I like bringing ideas to life, traveling where others haven’t, creating simple yet elegant solutions, and staring at clouds. </Typography>
                    <Typography variant="body1" style={{marginTop: "5vh"}}>I recently graduated from Northwestern University where I pursued a degree in Computer Science and Chinese Language and Culture. In my time at Northwestern, I worked at Allstate (Summer 2018) and Apple (Summer 2019) and will start full time at Groupon in the fall. I’ve also worked on different projects, which you can check out in <Link style={{color: "#EF767A", textDecoration: "none"}} to="/projects">projects</Link>!</Typography>
                    <Typography variant="body1" style={{marginTop: "5vh"}}>I spent much of my childhood in Mansfield, Ohio where I learned how to ride my bike and collected rocks for fun. In 2008, I moved to Columbus, Ohio, a much larger city than Mansfield. Here, I navigated the intricacies of middle school and high school. I developed a sort-of identity and sense of self and honed my leadership and soccer skills. For college, I moved to Evanston, Illinois, to attend Northwestern University. Only a little north of Chicago, I was now living near a large city, and what I learned in my time there was equally as vast. In all three places, I learned to see the beauty in what each city had to offer. Mansfield embodies simplicity, whereas Columbus offers balance. Evanston, and by extension Chicago, pushes for an internal drive, or passion. Simplicity, balance, and drive are qualities that I continue to implement in my life, whether it be work, or my everyday life!</Typography>
                    <Typography variant="body1" style={{marginTop: "5vh"}}>As I enter the workforce, my goals are to learn as much as I can and to meet and learn from people. Looking to the future, I want to be a full stack engineer that can effortlessly create beautiful and unique websites for others and myself.</Typography>
                    <Typography variant="body1" style={{marginTop: "5vh"}}>Outside of my life as an engineer, you can normally find me at a soccer field, with my sketchbook, or taking pictures and videos of my adventures in various cities! I also love reading, so if you're looking for a good book to read, check out some of these.</Typography>
                  </Paper>
                  <Grid container style={{marginTop: "10vh", marginLeft: "7vw"}}>
                    <Grid item>
                      <Grid className={classes.grid1} container justify="center" spacing={9}>
                          {tileData.map(tile => (
                            <Grid key={tile.title} item>
                              <Paper className={classes.paper5}>
                              <img style={{height: "200px",}} src={tile.img} alt={tile.title} />
                              </Paper>
                            </Grid>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Paper elevation={0} className={classes.paper4}>
                    <Typography variant="body1" style={{marginTop: "15vh"}}> If you would like to contact me directly, you can email me at nida.pervez16@gmail.com</Typography>
                  </Paper>
                </Paper>
            </Grid>
            
            <Grid item>
                <Paper elevation={0} className={classes.paper1} style={{ top: "0",}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/Home/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                </Paper>
            </Grid>
            
        </Grid>
        <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "25vh", width: "100vw"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           {/* <Button style={{color: "#EF767A"}}>Email</Button> */}
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button>
       </div>
      </div>
      
    );
  };
  
  export default About;
