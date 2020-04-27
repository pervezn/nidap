import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Grid, CardHeader, IconButton, CardContent, CardActions, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
// import { ShareIcon} from '@material-ui/icons/Share';
 
const useStyles = makeStyles(theme => ({
   avatar1: {
       width: 100,
       height: 100,
       marginTop: "1vw",
       // display: "flex",
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
       marginTop: "20vh",
       marginLeft: "20vw",
       color:"#55769A"
   },
   button1: {
       display: "block",
       marginLeft: "5vw",
   },
//    media: {
//        height: 0,
//        // paddingTop: '56.25%', // 16:9
//    },
//    card1: {
//        width:"40%",
//        // height: "30vh",
//        display: "inline-block",
//        margin: "2vw",
//    }
}))
 
const Article1 = ()  => {
   const classes = useStyles();
   return (
     <div className="Article1">
         <div>
       <Grid container>
           <Grid item>
               <Paper elevation={0} className={classes.paper1}  style={{ top: "0", paddingTop: "5vh"}}>
               {/* ^^ in the inspector it's not allowing display: sticky or bottom: 0 */}
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/">Home</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
               </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper2}>
                   <Typography variant="h2"style={{color:"#EEB868"}}>Muslim-American Culture</Typography>
                   <Typography variant="h6">May 1, 2019</Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "10vh"}}>
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   </Typography>
               </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper1} style={{ top: "0"}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/about"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
               </Paper>
           </Grid>
       </Grid>
       </div>
       <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "5vh"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           <Link style={{color: "#55769A", textDecoration: "none"}} to="/Resume"><Button style={{color: "#EF767A"}}>Resume</Button></Link>
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           {/* <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button> */}
       </div>
     </div>
    
   );
 };
  export default Article1;
