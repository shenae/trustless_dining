import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Process from './components/Process';
import Demo from './components/Demo';
import Docs from './components/Docs';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <NavBar />
    <br/>
    <br/>
    <main>
    <Route exact path="/Demo" component={Demo}/>
    <Route exact path="/Process" component={Process}/>
    <Route exact path="/Docs" component={Docs}/>
    <Route exact path="/Signup" component={SignUp}/>
    </main>
    </div>
  );
}

export default App;
