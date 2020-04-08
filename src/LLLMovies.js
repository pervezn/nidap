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


const firebaseConfig = {
  apiKey: "AIzaSyCVCGlSOSxJoz81l9I9KYyRWbqNn2w6Eaw",
  authDomain: "wezweb-deeb7.firebaseapp.com",
  databaseURL: "https://wezweb-deeb7.firebaseio.com",
  projectId: "wezweb-deeb7",
  storageBucket: "wezweb-deeb7.appspot.com",
  messagingSenderId: "656579364634",
  appId: "1:656579364634:web:f6058d0e0a72fa10780ea3",
  measurementId: "G-H62D2ZD4DY"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();
var storage = firebase.storage();
var storageRef = storage.ref();


const useStyles = makeStyles({
    avatar1: {
        width: 100,
        height: 100,
        marginTop: "2vw",
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
    button1: {
        display: "block",
        marginLeft: "5vw",
    }

})



const Movies = ()  => {
    const classes = useStyles();
    const [DL, setDL] = useState(null);
    const [seattle, setSeattle] = useState(null);
    const [summer, setSummer] = useState(null)
    const [spain, setSpain] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            const dl = firebase.storage().ref().child("DevilsLake.mp4");
            const seattle = firebase.storage().ref().child("Seattle2018.mp4");
            const summer = firebase.storage().ref().child("Summer2019.mp4");
            const spain = firebase.storage().ref().child("SpainHighlights!.mp4");
            await dl.getDownloadURL().then((url)  => {
                setDL(url);
            }); 
            await seattle.getDownloadURL().then((url)  => {
                setSeattle(url);
            }); 
            
            await spain.getDownloadURL().then((url)  => {
                setSpain(url);
            }); 

            await summer.getDownloadURL().then((url)  => {
                setSummer(url);
            }); 
        }
        fetchMovie();
    }, []);
    
    return (
      <div className="Movies">
        <Grid container style={{height: "100%"}}>
            <Grid item>
                <Paper elevation={0} className={classes.paper1}  style={{bottom: "0"}}> 
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Movies">Movies</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Photos">Photos</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Writing">Writing</Link></Button>
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/Travel">Travel</Link></Button>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0} className={classes.paper2}>
                    <div >
                        <div style={{marginTop: "30vh", height: "50vh"}}>
                            <Player playsInline src={DL} />
                        </div>

                        <div style={{marginTop: "30vh", height: "50vh"}}>
                            <Player playsInline src={seattle} />
                        </div>

                        <div style={{marginTop: "30vh", height: "50vh"}}>
                            <Player playsInline src={summer} />
                        </div>

                        <div style={{marginTop: "30vh", height: "50vh"}}>
                            <Player playsInline src={spain} />
                        </div>
                    </div>
                    
                </Paper>
            </Grid>
            
            <Grid item>
                <Paper elevation={0} className={classes.paper1} style={{ top: "0",}}>
                    <Typography variant="h5" style={{color: "#EEB868", marginTop: "3vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/LalaLand/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                </Paper>
            </Grid>
            
        </Grid>
        <div style={{display: "inline-block", bottom: "0", alignContent:"center", marginTop: "25vh", width: "100vw"}}>
           <Button onClick={() => {window.open('https://www.linkedin.com/in/nida-pervez-956a20149/')}} style={{color: "#EF767A"}}>LinkedIn</Button>
           <Button style={{color: "#EF767A"}}>Email</Button>
           <Button onClick={() => {window.open('https://github.com/pervezn')}} style={{color: "#EF767A"}}>Github</Button>
           <Button ><Link style={{color: "#EF767A", textDecoration: "none"}} to="/Home">Exit Lala-Land</Link></Button>
       </div>
      </div>
      
    );
  };
  
  export default Movies;
