import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Movies from "../../services/movie-api";

class MoviesPage extends Component {
  state = {
    query: null,
    movies: [],
  };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Movies.getMovies(
      "/search/movie",
      this.state.query,
      1
    );
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

        {this.state.movies &&
          this.state.movies.map(({ title, id }) => (
            <li key={id}>
              <Link
                // to={`${this.props.match.url}/${id}`}
                to={{
                  pathname: `${this.props.match.url}/${id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
      </div>
    );
  }
}

export default withRouter(MoviesPage);
