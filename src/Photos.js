import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Image, Theme, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
 
const useStyles = makeStyles({
   avatar1: {
       width: 100,
       height: 100,
       marginTop: "1vw",
       // display: "flex",
       // justifyContent: "center",
       marginLeft: "auto",
       marginRight:"auto",
   },
   paper1:{
       width: "20vw",
       height: "200px",
       position: "fixed",
      
   },
   gridList1:{
       width: "60vw",
       height: "100%",
      
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
 
const tileData = [
     
      {
       img: '../Pictures/2.jpg',
       title: '1',
       author: 'Nida',
       cols: 2,
     },
     {
       img: '../Pictures/3.JPG',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/4.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/5.JPG',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/6.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/1.JPG',
       title: '1',
       author: 'Nida',
       cols: 2,
     },
     {
       img: '../Pictures/7.JPG',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
    
     {
       img: '../Pictures/8.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/9.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/10.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/11.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
     {
       img: '../Pictures/12.jpg',
       title: '1',
       author: 'Nida',
       cols: 1,
     },
    ];
const Photos = ()  => {
   const classes = useStyles();
   return (
     <div className="Photos">
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList1} cols={2}>
            {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
     </div>
   );
 };
  export default Photos;
