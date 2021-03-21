import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Movies from "../../services/movie-api";

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/credits`, "", 1);
    this.setState({ cast: response.cast });
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.cast.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </div>
    );
  }
}

export default Cast;
