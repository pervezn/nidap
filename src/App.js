import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import Photos from './Photos';
import Writing from './Writing';
import Travel from './Travel';
import Projects from "./Projects";
import About from "./About";
import FactFlow from "./FactFlow";
import TropeTracker from "./TropeTracker";
import Internships from "./Internships";
import Resume from "./Resume";
import Article1 from "./Articles/Article1"
import Article2 from "./Articles/Article2"

const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};


 
const App = ()  => {
  // useEffect(() => {
  //   {window.scroll(0, 0)}
  //  },[]);


 return (
   <div className="App">
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/projects/factflow" component={FactFlow} />
     <Route exact path="/projects/tropetracker" component={TropeTracker} />
     <Route exact path="/projects/internships" component={Internships} />
     <Route exact path="/Movies" component={Movies} />
     <Route exact path="/Photos" component={Photos} />
     <Route exact path="/Writing" component={Writing} />
     <Route exact path="/Travel" component={Travel} />
     <Route exact path="/Resume" component={Resume} />
     <Route exact path="/Writing/MuslimAmericanCulture" component={Article1} />
     <Route exact path="/Writing/MyMuslimPride" component={Article2} />

     
   </div>
  
 );
};
 
export default App;
