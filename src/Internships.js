import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Paper,Typography, Button, } from '@material-ui/core';
// import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import { typeAlias } from '@babel/types';
// import {Route, Link} from 'react-router-dom';
 
const years = {Jr: "Summer 2018", Sr: 'Summer 2019'}

const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};
 
const colortheme = createMuiTheme({
  palette: {
    primary: { main: "#55769A", contrastText: "#fff" },
    secondary: { main: "#EEB868", contrastText: "#fff" }
  }
});

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
  paperMaster: {
   // padding: "2vw",
   textAlign: "center",
   color: "#000000",
   // background: "#A0DB9E",
   // border: "5px solid black",
 },
  paper1:{
      width: "20vw",
      height: "300px",
      position: "fixed",
     
  },
paper2: {
     width: "60vw",
     height: "100%",
     // backgroundColor: "lightpink",
     borderRadius: "0px",
     paddingTop: "10vw",
    //  marginTop: "20vh",
    //  border: "1px solid black",
    
  },
 paper3: {
   height:"10vh",
   width: "50vw",
  //  border: "1px solid #55769A",
   flexDirection: "row",
   display: "flex",
   
 },
  paper4: {
     // width: "40vw",
     height: "15vh",
     display:"inline-block",
     textAlign: "left",
     // position: "fixed",
     color: "#55769A",
  },
 paper5:{
   width: "10vw",
 },
 paper6:{
   width: "40vw",
   height: "100%",
 },
  paper7: {
   display:"inline-block",
   textAlign: "left",
   color: "#55769A",
 },
  paper8: {
     width: "60vw",
     textAlign: "left",
     marginTop: "4vw",
     marginLeft: "10vw",
     color: "#55769A",
   },
  button1: {
      display: "block",
      marginLeft: "5vw",
  },
  button2:{
    display: "inline-block",
    marginLeft: "10vh",
    marginBottom: "7vh",
    // color: "#55769A"
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


const AppleInternship = ({}) => {
  const classes = useStyles();
  

  return (
    <Paper elevation={0} className={classes.paper7} style={{width: "40vw"}}>
      <Typography variant="h6" style={{color: "#EEB868"}}>Apple</Typography>
      <Typography variant="body1" style={{marginTop:"3vh"}}>
        I worked at Apple the summer of 2019 as a software engineer intern on the Apple Online Store Front-end team. 
      </Typography> 
      <Typography variant="body1" style={{marginTop: "3vh"}}>
      At Apple I created a proof of concept collaborative shopping feature for the Apple Online Store. To Complete this project, I used NodeJS, Express, and node-fetch API to connect and communicate to the server. Furthermore, I used jQuery, HTML, CSS, and Javascript to create interactive components. 
      </Typography>
      <Typography variant="body1" style={{marginTop: "3vh"}}>
      For more information, please contact me at nida.pervez16@gmail.com.
      </Typography>
    </Paper >
  // </Paper>
  )}

const AllstateInternship = ({}) => {
  const classes = useStyles();
  return (
    
      <Paper elevation={0} className={classes.paper7} style={{width: "40vw"}}>
        <Typography variant="h6" style={{color: "#EEB868"}}>Allstate</Typography>
        <Typography variant="body1" style={{marginTop:"3vh"}}>
          I worked at the home office of Allstate the summer of 2018 as a software engineer intern. There, I worked on two main projects: a content management system and an Editable Quote. 
        </Typography> 
        <Typography variant="body1" style={{marginTop:"3vh"}}>
          The content management system I worked on was a web application that made accessing and editing information from the database easier and more efficient for users. To complete this project, I used asp.NET MVC framework and HTML for the front end, Oracle Database for the backend, and C# to connect the two. Implements a grid to display the information.
        </Typography>   
        <Typography variant="body1" style={{marginTop:"3vh"}}>
          I spent the majority of my time working on the Editable Quote. Editable Quote is an edit feature for proposals that are sent out to customers, which allows users to streamline the quote process by seeing their quotes update in real time as different options are selected. By allowing users to edit their own quotes, they would bypass the ping pong communication that happens between insurance agents. This adaptation projected to increase bind rates by 20%. To complete this project, I used C#, JavaScript, Html, and CSS to implement the front end, and an XML file to read and write to the backend. 
        </Typography> 
      </Paper>
  )};

const buttonColor = selected => (
  // console.log("in button color, selected: " + selected)
  selected ? "secondary" : "primary"
);

const YearSelector = ({state}) => {
  const classes = useStyles();
  return(
  <MuiThemeProvider theme={colortheme}>
    { Object.values(years) //Returns ["Summer 2018", "Sumemr 2019"]
      .map(value => 
      <Button 
        className={classes.button2}
        key={value} 
        color={ buttonColor(value === state.year) }
        onClick={ () => state.setYear(value)}>
        { value }
      </Button>
      )
    }
  </MuiThemeProvider>
)}




const Internships = ()  => {
   const classes = useStyles();
   const [year, setYear] = useState('Summer 2018')
   {console.log("year is: " + year)}
 
   return (      
         <div className="Internships">
          <Paper elevation={0} className={classes.paper4} style={{width: "15vw",textAlign:"center"}}>
              <img src={"../Pictures/NU.png"} style={{height:"100%",  alignContent:"right"}}/>
          </Paper>
          <Paper elevation={0} className={classes.paper7} style={{width: "30vw"}}>
            <Paper elevation={0} className={classes.paper3}>
              <Paper elevation={0} className={classes.paper4} style={{width: "35vw"}}>
                  <Typography variant="h3" style={{marginTop: "0px", paddingTop: "0px", color: "#EF767A"}}>Internships</Typography>
              </Paper>
            </Paper>
          </Paper >
          <Paper elevation={0} className={classes.paper8}>
                    <YearSelector state={{year, setYear}} />
                    {year === "Summer 2019" ? <AppleInternship/>:<AllstateInternship/>}
                  </Paper>
         </div>
      
       );
     };
  export default Internships;


 
 
 


 
   
    
