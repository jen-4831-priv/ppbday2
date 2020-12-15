import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BDCake from "./bd-cake/bdCake";
import Home from "./home/home";
import Button from "./components/button/button";
import Video from "./video/video";
import BDCard from "./bd-card/bdCard";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <div className="root-container">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <nav className="nav-bar">
            <Button toURL="/home" btnText="Home" />
            <Button toURL="/bdCake" btnText="Birthday Cake" />
            <Button toURL="/bdCard" btnText="Birthday Card" />
            <Button toURL="/fav-video" btnText="Your favourite video" />
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
              {/* <Home />
            </Route> */}
            <Route path="/bdCake" exact component={BDCake} />
              {/* <BDCake />
            </Route> */}
            <Route path="/bdCard" exact component={BDCard} />
              {/* <BDCard />
            </Route> */}
            <Route path="/fav-video" exact>
              <Video />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
