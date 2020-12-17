import React from "react";
import './App.css'
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Single from "./pages/Single";
import Error from "./pages/Error";
import {Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";


function App() {
  return (
  <>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/vehicles" component={Vehicles}/>
  <Route exact path="/vehicles:slug" component={Single}/>
  <Route component={Error} />
  </Switch>
    </>
  );
}

export default App;
