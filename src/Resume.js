import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import {Route, Link} from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
 
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

// Add this method to the React 
const exportPDF = () => {
    this.resume.save();
}
// Add this to the render method


const Resume = ()  => {
   const classes = useStyles();
   return (
     <div className="Travel">
       <Grid container style={{height: "100%"}}>
           <Grid item>
               <Paper elevation={0} className={classes.paper1}  style={{top: "0", paddingTop: "5vh"}}>
               {/* ^^ in the inspector it's not allowing display: sticky or bottom: 0 */}
                    <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/projects">Projects</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Movies">Movies</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Photos">Photos</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#55769A", textDecoration: "none"}} to="/Writing">Writing</Link></Button>
                   <Button className={classes.button1}><Link style={{color: "#EEB868", textDecoration: "none"}} to="/Travel">Travel</Link></Button>
               </Paper>
           </Grid>
           <Grid item>
            <Paper elevation={0} className={classes.paper2}>
               {/* <Button onClick={exportPDF}>download</Button> */}
               <PDFExport paperSize={'Letter'}
                    fileName="NidaPervezResume.pdf"
                    title=""
                    subject=""
                    keywords=""
                    // ref={(r) => this.resume = r}
                    >
                        <div style={{
                            height: 792,
                            width: 612,
                            padding: 'none',
                            backgroundColor: '#55769A',
                            boxShadow: '5px 5px 5px black',
                            margin: 'auto',
                            overflowX: 'hidden',
                            overflowY: 'hidden'}}>
                            <Typography variant="h5" style={{marginTop:"2vh", color: "white"}}>Nida Pervez</Typography>
                            <Typography variant="caption" style={{color:"white"}}>5697 Salem Dr. Westerville, OH 43082 | (614) 429-8520 |  nida.pervez16@gmail.com </Typography>
                            <Typography variant="body1" style={{textAlign:"Left",color:"white", marginLeft: "1vw"}}>Education</Typography>
                            <div style={{display:"flex"}}>
                                <div variant="body2" style={{textAlign:"Left", color:"white", marginLeft: "2vw", fontSize:"12px"}}> Northwestern University (Evanston, IL)	</div>
                                <div variant="body2" style={{textAlign:"Right", marginLeft:"15vw",color:"white", marginLeft: "16vw", fontSize:"12px"}}>  Expected June 2020	</div>
                            </div>
                            <div style={{textAlign:"Left", marginLeft: "2vw", fontSize: "13px", color: "white"}}>Bachelor of Arts in Computer Science, Minor in Chinese, Dean’s List</div>
                            <div style={{textAlign:"Left", marginLeft: "2vw", fontSize: "13px", color: "white"}}>GPA: 3.63/4.00 </div>
                            {/* <Typography variant="body2" style={{textAlign:"Left"}}>Relevant Coursework: Data Structures, Technology and Human Interaction, Computer Programming Languages, Machine Perception of Music, Human Computer Interaction, Intro Artificial Intelligence</Typography> */}
                            <Typography variant="body1" style={{textAlign:"Left", marginLeft: "1vw", color: "white"}}>Skills</Typography>
                            <ul style={{marginTop: "0px", marginBottom:"0px"}}>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Programming Languages: Proficient in Racket, Python, C#, Swift 3, C++, HTML, JS, CSS, jQuery</li>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Foreign Languages: Proficient in Urdu and Chinese </li>
                            </ul>
                            <Typography variant="body1" style={{textAlign:"Left", marginLeft: "1vw", color: "white"}}>Work Experience</Typography>
                            <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "13px", color: "white"}}> Software Engineering Internship, Apple (Apple Online Store)</div>
                                <div style={{textAlign:"Right", marginLeft:"7vw", fontSize: "13px", color: "white"}}>  June 2019 - Present	</div>
                            </div>
                            <ul style={{marginTop: "0px", marginBottom:"0px"}}>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Created a proof of concept collaborative shopping feature for the Apple Online Store</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Used NodeJS, Express, and node-fetch API to connect and communicate to the server</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Used jQuery, HTML, CSS, and Javascript to create interactive components.</li>
                            </ul>
                            <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "13px", color: "white"}}> Software Engineering Internship, Allstate	</div>
                                <div style={{textAlign:"Right", marginLeft:"11vw", fontSize: "13px", color: "white"}}>  June 2018 - September 2018	</div>
                            </div>
                            <ul style={{marginTop: "0px", marginBottom:"0px"}}>
                                <li style={{textAlign:"Left",  fontSize: "12px", color: "white"}}>Created a Content Management System web application that makes accessing and editing information from the database easier and more efficient for users</li>
                                <li style={{textAlign:"Left",  fontSize: "12px", color: "white"}}>Used asp.NET MVC framework and HTML for the front end, Oracle Database for the backend, and C# to connect the two. Implements a grid to display the information</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Created Editable Quote, an edit feature for proposals that are sent out to customers, which allows users to streamline the quote process by seeing their quotes update in real time as different options are selected</li>
                                <li style={{textAlign:"Left",fontSize: "12px", color: "white"}}>Used C#, JavaScript, Html, and CSS to implement the front end, and an XML file to read and write to the backend</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Projected to increase bind rates by 20%</li>
                            </ul>
                            <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "13px", color: "white"}}> Teaching Assistant, Northwestern University</div>
                                <div style={{textAlign:"Right", marginLeft:"13vw", fontSize: "13px", color: "white"}}>  Winter 2017 - Present	</div>
                            </div>
                            <ul style={{marginTop: "0px", marginBottom:"0px"}}>
                                <li style={{textAlign:"Left",  fontSize: "12px", color: "white"}}>Assissted in teaching Fundamentals of Computer Programming I and Fundamentals of Computer Programming II</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Lead and prepare materials for three sections/classes</li>
                                <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Host office hours about 6hr/week to help students with class materials and labs </li>
                                <li style={{textAlign:"Left",  fontSize: "12px", color: "white"}}>Act as a mentor and guide for foundational Computer Science classes</li>
                            </ul>
                            <Typography variant="body1" style={{textAlign:"Left", color: "white", marginLeft: "1vw"}}>Individual Projects</Typography>
                            <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "13px", color: "white"}}> Fact Flow	</div>
                                <div variant="body2" style={{textAlign:"Right", marginLeft:"27vw", fontSize: "13px", color: "white"}}>   April 2019 - June 2019	</div>
                            </div>
                            <ul style={{marginTop: "0px", marginBottom:"0px"}}>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Created a Google Document add-on to assist and streamline the fact-checking process for news organizations</li>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Used Google script and Javascript to develop the front end of the add-on</li>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Closely communicated with the design/research team to properly manage overall goals</li>
                            <li style={{textAlign:"Left", fontSize: "12px", color: "white"}}>Implemented Firebase as a backend provider to manage multiple Google Documents simultaneously</li>
                            </ul>
                            <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "13px", color: "white"}}> Trope Tracker	</div>
                                <div variant="body2" style={{textAlign:"Right", marginLeft:"20vw", fontSize: "13px", color: "white"}}>  September 2019 - December 2019	</div>
                            </div>
                            {/* <div style={{display:"flex"}}>
                                <div style={{textAlign:"Left", marginLeft: "1vw", fontSize: "12px", color: "white"}}> LatinNext</div>
                                <div style={{textAlign:"Right", marginLeft:"15vw", fontSize: "12px", color: "white"}}> March 2020 - Present  	</div>
                            </div> */}
                        </div>
                </PDFExport>
            </Paper>
           </Grid>
           <Grid item>
               <Paper elevation={0} className={classes.paper1} style={{ top: "0"}}>
               <Typography variant="h5" style={{color: "#EEB868", marginTop: "5vh"}}>Nida Pervez</Typography>
                   <Button> <Link style={{color: "#55769A", textDecoration: "none"}} to="/"><Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/></Link></Button>
                   
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
  export default Resume;
