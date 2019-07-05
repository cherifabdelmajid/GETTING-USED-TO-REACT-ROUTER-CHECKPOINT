import React from 'react';

import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Page1 from './page1.js'
import Page2 from './page2.js'
import Page3 from './page3.js'
import Home from './home.js'


function App() {
  return (<BrowserRouter>
    <div className="App">
    
               
                <Home />
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>    
                          
      </div>
      </BrowserRouter>
      
  );
}

export default App;