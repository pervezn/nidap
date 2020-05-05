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
    //    height: "100%",
       marginTop: "20vh",
       marginLeft: "20vw",
       color:"#55769A",
   },
   button1: {
       display: "block",
       marginLeft: "5vw",
       
   },
   media: {
       height: 0,
       // paddingTop: '56.25%', // 16:9
   },
   card1: {
       width:"40%",
       // height: "30vh",
       display: "inline-block",
       margin: "2vw",
   }
}))
 
const Article1 = ()  => {
   const classes = useStyles();
   return (
     <div className="Article1" style={{color: "#55769A"}}>
        <Typography variant="h2" style={{color:"#EEB868"}}>My Muslim Pride</Typography>
        <Typography variant="h6">May 1, 2020</Typography>
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
     </div>
    
   );
 };
  export default Article1;
