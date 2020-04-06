import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { typeAlias } from '@babel/types';
import Home from "./Home";
import About from "./About";
import FactFlow from "./FactFlow";
import TropeTracker from "./TropeTracker";
import Internships from "./Internships"
import {Route, Link} from 'react-router-dom';
import LalaLand from './LLLHome';
import Movies from './LLLMovies';
import Photos from './LLLPhotos';
import Writing from './LLLWriting';
import Travel from './LLLTravel';


const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};
 
 
const App = ()  => {
 
 return (
   <div className="App">
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/projects/factflow" component={FactFlow} />
     <Route exact path="/projects/tropetracker" component={TropeTracker} />
     <Route exact path="/projects/internships" component={Internships} />
     <Route exact path="/LalaLand" component={LalaLand} />
     <Route exact path="/LalaLand/Movies" component={Movies} />
     <Route exact path="/LalaLand/Photos" component={Photos} />
     <Route exact path="/LalaLand/Writing" component={Writing} />
     <Route exact path="/LalaLand/Travel" component={Travel} />
   </div>
  
 );
};
 
export default App;
