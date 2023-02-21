import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>  

            <Router>
            <NavBar/>
            
            <Routes>
              <Route exact path='/' element={<News key="general" pagesize={5} category="general" country="in"/>}></Route>
              <Route exact path='/business' element={<News key="bus" pagesize={5} category="business" country="in"/>}></Route>
              <Route exact path='/entertainment' element={<News key="ent" pagesize={5} category="entertainment" country="in"/>}></Route>
              <Route exact path='/general' element={<News key="gen" pagesize={5} category="general" country="in"/>}></Route>
              <Route exact path='/health' element={<News key="hlt" pagesize={5} category="health" country="in"/>}></Route>
              <Route exact path='/science' element={<News key="sci" pagesize={5} category="science" country="in"/>}></Route>
              <Route exact path='/sports' element={<News key="sport" pagesize={5} category="sports" country="in"/>}></Route>
              <Route exact path='/technology' element={<News key="tech" pagesize={5} category="technology" country="in"/>}></Route>
            </Routes>
            </Router>
      </>
    
    )
  }
}


