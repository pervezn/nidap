import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Typography, CardHeader, CardContent, Button, Card, CardMedia } from '@material-ui/core';
// import {Route, Link} from 'react-router-dom';
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
 
const DisplayArticle1 = ({state}) => {
    const classes = useStyles();
    return (
        <Button onClick={() => state.setCurrPage("Article1")} className={classes.button2}>
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
        </Button>
    )
}

const DisplayArticle2 = ({state}) => {
    const classes = useStyles();
    return (
        <Button onClick={() => state.setCurrPage("Article2")} className={classes.button2}>
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
                <Typography variant="body2" component="p" style={{color:"#55769A"}}>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            </Card>
        </Button>
    )
}

const DisplayArticle3 = ({state}) => {
    const classes = useStyles();
    return (
        <Button onClick={() => state.setCurrPage("Article3")} className={classes.button2}>
            <Card className={classes.card1}>
            <CardHeader
                title="The Thing with Men"
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
        </Button>
    )
}

const DisplayArticle4 = ({state}) => {
    const classes = useStyles();
    return (
        <Button onClick={() => state.setCurrPage("Article4")} className={classes.button2}>
            <Card className={classes.card1}>
            <CardHeader
                title="What College Taught Me"
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
        </Button>
    )
}

const Writing = ({state})  => {
   return (
     <div className="Writing">
        {console.log("HERE")}
        <DisplayArticle1 state={state}/>
        <DisplayArticle2 state={state}/>
        <DisplayArticle3 state={state}/>
        <DisplayArticle4 state={state}/>
     </div>
   );
 };
  export default Writing;
