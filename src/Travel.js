import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
 
const useStyles = makeStyles({
   avatar1: {
       width: 100,
       height: 100,
       marginTop: "1vw",
       // display: "flex",
       // justifyContent: "center",
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
       marginTop: "20vh",
       marginLeft: "20vw",
   },
   button1: {
       display: "block",
       marginLeft: "5vw",
   }
 
})
const Travel = ()  => {
   const classes = useStyles();
   return (
     <div className="Travel">
       <Grid container style={{height: "100%"}}>
           <Grid item>
               <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}>
               {/* ^^ in the inspector it's not allowing display: sticky or bottom: 0 */}
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/">Home</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
               </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper2}>
               <Button onClick={() => {window.open('https://docs.google.com/document/d/1yCxf4pGqii9mUhgz80NaYgw1e904TcSk8RD3UxMUO9M/edit?usp=sharing')}} ><img src={"../Pictures/chi.jpg"}  style={{width:"50vw"}}/></Button>
               <Button onClick={() => {window.open('https://docs.google.com/document/d/1_rqhLk3dqKwDqz9yzmF_FjhvdSN_ZzJFZT1zk0ZaW2U/edit?usp=sharing')}} ><img src={"../Pictures/sf.jpg"}  style={{width:"50vw"}}/></Button>
               </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper1} style={{ top: "0"}}>
               <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/about"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                   
               </Paper>
           </Grid>
       </Grid>
       <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "5vh"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           <Link style={{color: "#55769A", textDecoration: "none"}} to="/Resume"><Button style={{color: "#EF767A"}}>Resume</Button></Link>
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           {/* <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button> */}
       </div>
     </div>
    
   );
 };
  export default Travel;
