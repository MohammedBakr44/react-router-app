import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Page404() {
  return (
    <Router>
      <div className="p404">
        <div>
          <h1 className="error">404</h1>
          <p>You expected a page</p>
          <img
            src="https://i.kym-cdn.com/photos/images/newsfeed/000/754/538/454.jpg"
            alt="Dio"
          />
          <h1 className="meme">But it was me, Dio!</h1>
        </div>
      </div>
    </Router>
  );
}

const Home = () => <h1>Home page</h1>;

export default Page404;
