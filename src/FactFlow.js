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
    height: "100vh",
    width: "30vw",
    borderLeft: "25px solid #55769A",
    borderRadius: "0px",
    // background: "lightblue",
    // position: "-webkit-sticky", 
    // position: "sticky", 
    // top: "0"
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
    width: "60vw",
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
      <Grid container >
        <Grid item>
          <Paper elevation={0} className={[classes.paper1, classes.paperMaster]}>
            <Paper elevation={0} className={classes.paper2} style={{position: "-webkit-sticky", position: "sticky", top: "0"}}>
              <Button className={classes.button1}> <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/">Home</Link></Button>
              <Button className={classes.button1}>  <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/about">About</Link></Button>
              <Button className={classes.button1}>Resume</Button>
              <Button className={classes.button1}>Projects</Button>
              <Button className={classes.button2} style={{color: "#EEB868"}}>Fact Flow</Button>
              <Button className={classes.button2}><Link style={{textDecoration: "none"}} to="/projects/tropetracker">Trope Tracker</Link></Button>
              <Button className={classes.button2}><Link style={{textDecoration: "none"}} to="/projects/internships">Internships</Link></Button>
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
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    );
  };



  
  export default FactFlow;
  