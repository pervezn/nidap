import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';

const useStyles = makeStyles({
    paperMaster: {
      // padding: "2vw",
      textAlign: "center",
      color: "#000000",
      // background: "#A0DB9E",
      // border: "5px solid black",
    },
    paper0: {
      height:"100vh",
      width: "3vw",
      background: "#55769A",
    },
    paper1: {
      height:"80vh",
      width: "37vw",
    },
    paper2: {
      height:"80vh",
      width: "60vw",
    },
    paper3: {
      height:"40vh",
      width: "50vw",
      // background: "#55769A",
      border: "1px solid #55769A",
      flexDirection: "row",
      display: "flex",
      
    },
    paper4:{
      height:"65vh",
      width: "27vw",
      // background: "#55769A",
      marginTop: "10vw", 
      marginLeft: "10vw",
      display: "sticky",
      textAlign: "left",
    },
    paper5:{
      // height:"65vh",
      width: "10vw",
      // height: "40vh",
      // background: "#55769A"
    },
    paper6:{
      // height:"65vh",
      width: "40vw",
      height: "40vh",
      // background: "#55769A"
    },
    button1: {
      display: "inline-block",
      color: "#49BEAA",
    },
    button2: {
      marginBottom: "2vw", 
      marginLeft: "5vw"
    },
    avatar1: {
      width: 300,
      height: 300,
      marginTop: "5vw"
    },
  })




const About = ()  => {
    const classes = useStyles();
    return (
      <div className="About">
        <Grid container>
            <Paper elevation={0} square className={classes.paper0}></Paper>
            <Grid item>
            <Paper elevation={0} className={[classes.paper1, classes.paperMaster]}>
                <Paper elevation={0} className={classes.paper4}>
                <Button className={classes.button1}>
                    <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/">Home</Link>
                </Button>
                <Button className={classes.button1}>
                    <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/about">About</Link>
                </Button>
                    <Button className={classes.button1}>Resume</Button>
                    <Avatar src="../Pictures/nidpic.JPG" className={classes.avatar1}/>
                </Paper>
            </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper2}>
                    <Typography style={{marginTop: "10vw", textAlign: "left"}} variant="h1">Hello World.</Typography>
                </Paper>
            </Grid>
        </Grid>
      </div>
      
    );
  };
  
  export default About;