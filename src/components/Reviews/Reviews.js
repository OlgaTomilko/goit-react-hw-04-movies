import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Movies from "../../services/movie-api";

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/reviews`, "", 1);
    this.setState({ reviews: response.results });
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.reviews.map(({ author, id }) => (
          <li key={id}>{author}</li>
        ))}
      </div>
    );
  }
}

export default Reviews;
