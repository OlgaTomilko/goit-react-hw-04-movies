import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import { NavLink, Route } from "react-router-dom";
import Movies from "../../services/movie-api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    id: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}`, "", 1);
    this.setState({ ...response });
    // console.log(this.state);
  }

  render() {
    const {
      poster_path,
      title,
      id,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { match } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.props.history.push(this.props.location.state.from);
          }}
        >
          Back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
