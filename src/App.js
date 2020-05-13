import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Article1 from "./Articles/Article1";
import Article2 from "./Articles/Article2";
import Default from "./Default";


const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};


 
const App = ()  => { 


 return (
   <div className="App">
     <Router>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Default/about" component={About} />
          <Route exact path="/Default/projects" component={Projects} />
          <Route exact path="/Default/projects/factflow" component={FactFlow} />
          <Route exact path="/Default/projects/tropetracker" component={TropeTracker} />
          <Route exact path="/Default/projects/internships" component={Internships} />
          <Route exact path="/Default/Movies" component={Movies} />
          <Route exact path="/Default/Photos" component={Photos} />
          <Route exact path="/Default/Writing" component={Writing} />
          <Route exact path="/Default/Travel" component={Travel} />
          <Route exact path="/Default/Resume" component={Resume} />
          <Route exact path="/Default" component={Default} />
          <Route exact path="/Default/Writing/MuslimAmericanCulture" component={Article1} />
          <Route exact path="/Default/Writing/MyMuslimPride" component={Article2} />
      </Switch>
     </Router>
     
   </div>
  
 );
};
 
export default App;
