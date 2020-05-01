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
                   <Typography variant="h2"style={{color:"#EEB868"}}>My Muslim Pride</Typography>
                   <Typography variant="h6">May 1, 2019</Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "10vh"}}>
                   A group of extremists, whose beliefs were contradictory to Islam, destroyed the image of my religion in the public’s eye in one day. 9/11 happened when I was three years old, so I’ve never really lived a life without Islam having a negative connotation to it. Practicing my faith was supposed to be a source of pride for me, but that privilege was stripped from me before ever experiencing it.
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   The early part of my childhood took place in Mansfield, Ohio. Mansfield is a small, quiet town with an extremely small Muslim population. We didn’t have a well-established Masjid, but we tried to practice Islam to the best of our ability within our restraints.
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   In 2008, my family moved to a suburb of Columbus, Ohio. There, we were introduced to a Muslim community at NICC (Noor Islamic Cultural Center). I hadn’t developed Muslim pride yet, but this transition marked my introduction to a conscious Muslim identity. Although we had this newfound community, I still faced a predominantly white environment at my small school. To cultivate this budding identity, I organized a Muslim student group with the three other Muslim students and my brother. Rather than building a sense of pride in my religion, I continued to feel burdened by the media’s perception of Muslims. I felt the need to overcompensate by dedicating my time to pleasing others and showing people what “normal” Muslims were like.
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   I found it hard to be unapologetically Muslim. Throughout the years, lunchtime remained a source of anxiety for me. I didn’t know how to nonchalantly excuse myself from my friends and go pray Dhuhr. Most times, if my friends were around, then I would feel too shy and not pray. This brought me guilt, but I didn’t have enough courage to step away for a moment. I was young and I didn’t know how to stand up for myself against myself. It wasn’t until the end of college when I started to understand where I was going wrong about the whole thing.
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   I started wearing the Hijab in college. I went from being someone who could blend in as any other brown girl, to someone who was undoubtedly Muslim. Consequently, this added more pressure on me to present myself as a “normal” Muslim. I would fixate on non-Muslims’ perception of me, concerned about whether my first impressions and body language came off as rude or uninterested. 
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   At the same time, I was becoming surrounded by Muslim students that I interacted with daily. This was an extremely new experience for me. Not only was I exposed to Muslim peers every day, but many of them held different racial and ethnic backgrounds than my own. Here, I found role models, friends and mentors who influenced me unknowingly and who were invested in my growth.
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   I don’t know when the switch happened, but it was during my junior year of college when I suddenly stopped caring. I came to the realization that I cannot change everyone’s perception of Islam nor is it my job to do so. I can do my best, but even that can put a lot of pressure on someone. Instead of trying to please everyone, I chose to be myself. I stopped caring about who was watching while I prayed in the library. I stopped caring about how others perceived me. Yes, I am Muslim, but I’m also a human, and if you can’t relate to me under the universal bond of humanity, then you lack the empathy necessary to understand me and my struggles as a Muslim. Energy is precious, and I have other places to spend it. 
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   What I learned from this experience was to stop packaging Islam to fit into other people’s boxes. Islam is a religion. I’m sorry, I refuse to curate a version of Islam that’s perfect for you -- my religion is for me. You don’t need to love my religion, but don’t come in the way of me loving it. You don’t need to understand my religion, but don’t ask me to explain it without being willing to listen. If Islam says something, don’t sugarcoat it because you’re scared of what others might think. If people are willing to listen, then be patient with them. Be proud of your religion. If people have problems with it, then that’s on them. 
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "5vh"}}>
                   I don’t know why, but it seems like the world has chosen Muslims as the designated victims of media bullying. This won’t change. It hasn’t as long as I’ve been alive, so I don’t expect it to change. Despite the years of negative media portrayal, I know myself and my religion. I refuse to be stereotyped and depicted as a terrorist. My religion is beautiful, and I can confidently say that I’m Muslim, and I’m proud. 
                   </Typography>
                   <Typography variant="body1" style={{textAlign: "left", marginTop: "10vh"}}>
                    This article is featured in Northwestern's magazine by Muslim students, <Button onClick={() => {window.open('https://albayannorthwestern.squarespace.com/blog/2020/5/1/my-muslim-pride')}} style={{color: "#EF767A", padding: "0px"}}>AlBayan</Button>
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
