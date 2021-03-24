import React, { Component } from "react";
import MovieList from "../MoviesList/MoviesList";
import Movies from "../../services/movie-api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Movies.getMovies("/trending/all/day");
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <MovieList data={this.state.movies}></MovieList>
      </div>
    );
  }
}

export default HomePage;
