import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./components/views/HomePage/HomePage";
import MoviesPage from "./components/views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/views/MovieDetailsPage/MovieDetailsPage";
import NotFoundView from "./components/views/NotFoundView/NotFoundView";

// const HomePage = lazy(() => import("./components/views/HomePage.js" /*webpackChunkName: "home-page" */));
// const MoviesPage = lazy(() => import("./components/views/MoviesPage.js" /*webpackChunkName: "movies-page" */));
// const MovieDetailsPage = lazy(() =>
//   import("./components/views/MovieDetailsPage.js" /*webpackChunkName: "movie-details-page" */)
// );
// const NotFoundView = lazy(() => import("./components/views/NotFoundView.js" /*webpackChunkName: "not-found-view" */));

const App = () => (
  <div className="App">
    <ul className="Navlinks-list">
      <li>
        <NavLink to="/" activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" activeClassName="active-link">
          Movie
        </NavLink>
      </li>
    </ul>
    {/* <Suspense fallback={<h1>Loading...</h1>}> */}
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundView} />
    </Switch>
    {/* </Suspense> */}
  </div>
);

export default App;
