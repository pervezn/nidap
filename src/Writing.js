import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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
    //    marginTop: "20vh",

       marginLeft: "20vw",
   },
   button1: {
       display: "block",
       marginLeft: "5vw",
   },
   button2:{
    //    width:"50%",
       padding: 0,
   },
   media: {
       height: 0,
       // paddingTop: '56.25%', // 16:9
       color: "#EEB868"
   },
   card1: {
       width:"40%",
       // height: "30vh",
       display: "inline-block",
       margin: "2vw",
       color: "#EEB868"
   }
}))
 
const Writing = ()  => {
   const classes = useStyles();
   return (
     <div className="Writing">
        
                   <Link style={{ textDecoration: "none"}} to="/Writing/MuslimAmericanCulture">
                    {/* <Button className={classes.button2}> */}
                    <Card className={classes.card1}>
                       <CardHeader
                           title="My Muslim Pride"
                           subheader="May 1, 2019"
                       />
                       <CardMedia
                           className={classes.media}
                           title="Paella dish"
                       />
                       <CardContent>
                           <Typography variant="body2" component="p" style={{color:"#55769A"}}>
                           This impressive paella is a perfect party dish and a fun meal to cook together with your
                           guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                       </CardContent>
                    </Card>
                    {/* </Button> */}
                   </Link>
                   <Link style={{ textDecoration: "none"}} to="/Writing/MyMuslimPride">
                   {/* <Button className={classes.button2}> */}
                       <Card className={classes.card1}>
                       <CardHeader
                           title="Muslim-American Culture"
                           subheader="May 1, 2019"
                       />
                       <CardMedia
                           className={classes.media}
                           title="Paella dish"
                       />
                       <CardContent>
                           <Typography variant="body2" style={{color:"#55769A"}} component="p">
                           This impressive paella is a perfect party dish and a fun meal to cook together with your
                           guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                       </CardContent>
                   </Card>
                   {/* </Button>  */}
                   </Link>
                   <Link style={{ textDecoration: "none"}} to="/Writing/">
                   {/* <Button className={classes.button2}> */}
                    <Card className={classes.card1}>
                       <CardHeader
                           title="The Thing with Men"
                           subheader="March 3, 2019"
                       />
                       <CardMedia
                           className={classes.media}
                           title="Paella dish"
                       />
                       <CardContent>
                           <Typography variant="body2" style={{color:"#55769A"}} component="p">
                           This impressive paella is a perfect party dish and a fun meal to cook together with your
                           guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                       </CardContent>
                    </Card>
                   {/* </Button> */}
                   </Link>
                   <Link style={{ textDecoration: "none"}} to="/Writing/">
                   {/* <Button className={classes.button2}> */}
                       <Card className={classes.card1}>
                       <CardHeader
                           title="What College Taught Me"
                           subheader="March 14, 2019"
                       />
                       <CardMedia
                           className={classes.media}
                           title="Paella dish"
                       />
                       <CardContent>
                           <Typography variant="body2" style={{color:"#55769A"}} component="p">
                           This impressive paella is a perfect party dish and a fun meal to cook together with your
                           guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                       </CardContent>
                   </Card>
                   {/* </Button> */}
                   </Link>
            
     </div>
    
   );
 };
  export default Writing;
