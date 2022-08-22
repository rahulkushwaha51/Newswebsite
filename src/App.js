import "./App.css";
import React, { useState } from "react";
import Navbar from "./componant/Navbar";
import News  from "./componant/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from '@weblif/react-top-loading-bar'
const App =()=> {
 const pagesize = 10;
 const [progress,setProgress]=useState(0)
  // apiKey= process.env.REACT_APP_NEWS_API
 const apiKey= '3f0cfd5e04d74b1b8c22aa51c5b2cae9'
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar color="red" progress= {progress} height= {3}/>
          <Switch>
          <Route exact path="/"><News  apiKey={apiKey} setProgress={setProgress} key="general" pagesize={pagesize} country="in" category="general" /></Route>
            <Route exact path="/general"><News  apiKey={apiKey} setProgress={setProgress} key="general" pagesize={pagesize} country="us" category="general" /></Route>
            <Route exact path="/sports"><News  apiKey={apiKey} setProgress={setProgress} key="sports" pagesize={pagesize} country="us" category="sports" /></Route>
            <Route exact path="/entertainment"><News  apiKey={apiKey} setProgress={setProgress} key="entertainment" pagesize={pagesize} country="us" category="entertainment" /></Route>
            <Route exact path="/technology"><News  apiKey={apiKey} setProgress={setProgress} key="technology" pagesize={pagesize} country="us" category="technology" /></Route>
            <Route exact path="/science"><News  apiKey={apiKey} setProgress={setProgress} key="science" pagesize={pagesize} country="us" category="science" /></Route>
            <Route exact path="/health"><News  apiKey={apiKey} setProgress={setProgress} key="health" pagesize={pagesize} country="us" category="health" /></Route>
            <Route exact path="/business"><News  apiKey={apiKey} setProgress={setProgress} key="business" pagesize={pagesize} country="us" category="business" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default App