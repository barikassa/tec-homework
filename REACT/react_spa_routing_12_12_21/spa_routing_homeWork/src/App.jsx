import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/contacts.jsx/Contact";
import Courses from "./pages/courses/Courses";
import Testemonial from "./pages/testemonial/Testemonial";
import Events from "./pages/events/Events";
import FooterList from "./pages/footer/Footer.jsx";
import * as Stayles from "./stayleApp.module.css"

function App() {
  return (
    <div className="App" >
     <div >
       <div >
        <BrowserRouter>
          <Link to="/">Home</Link>
          <br />
          <Link to="/About">About</Link>
          <br />
          <Link to="/Contact">Contact</Link>
          <br />
          <Link to="/Courses">Courses</Link>
          <br />
          <Link to="/Testemonial">Testemonial</Link>
          <br />
          <Link to="/Events">Events</Link>
        

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Testemonial" component={Testemonial} />
            <Route exact path="/Events" component={Events} />
          </Switch>
        </BrowserRouter>
        </div>
          <FooterList />
          </div>
    </div>
  );
}

export default App;
