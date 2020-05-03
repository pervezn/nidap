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
    //    height: "100%",
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
        <Button onClick={() => {window.open('https://docs.google.com/document/d/1yCxf4pGqii9mUhgz80NaYgw1e904TcSk8RD3UxMUO9M/edit?usp=sharing')}} ><img src={"../Pictures/chi.jpg"}  style={{width:"50vw"}}/></Button>
        <Button onClick={() => {window.open('https://docs.google.com/document/d/1_rqhLk3dqKwDqz9yzmF_FjhvdSN_ZzJFZT1zk0ZaW2U/edit?usp=sharing')}} ><img src={"../Pictures/sf.jpg"}  style={{width:"50vw"}}/></Button>
     </div>
    
   );
 };
  export default Travel;
