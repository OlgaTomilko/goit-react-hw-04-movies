import React, { Component } from "react";
import Movies from "../../services/movie-api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Movies.getMovies("/trending/all/day", "", 1);
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        {this.state.movies.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </div>
    );
  }
}

export default HomePage;
