import "./App.css";
import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import MoviesPage from "./components/views/MoviesPage";
import MovieDetailsPage from "./components/views/MovieDetailsPage";

const App = () => (
  // <div className="App">
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movie</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  </>
  // </div>;
);

export default App;
