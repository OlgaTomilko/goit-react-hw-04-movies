import React, { Component } from "react";
import MovieList from "../MoviesList/MoviesList";
import Movies from "../../services/movie-api";

class MoviesPage extends Component {
  state = {
    query: this.props.location.search.slice(7),
    movies: [],
  };

  componentDidMount() {
    if (this.state.query !== "") {
      this.handleSearch();
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch();

    this.props.history.push({
      ...this.props.location,
      search: `?query=${this.state.query}`,
    });
  };

  handleSearch = async () => {
    const response = await Movies.getMovies("/search/movie", this.state.query);
    this.setState({ movies: response.results });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm">
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />

            <button
              type="submit"
              className="SearchForm-button"
              onClick={this.handleSubmit}
            >
              <span className="SearchForm-button-label">Search</span>
            </button>
          </form>
        </header>
        <MovieList data={this.state.movies}></MovieList>
      </div>
    );
  }
}

export default MoviesPage;
