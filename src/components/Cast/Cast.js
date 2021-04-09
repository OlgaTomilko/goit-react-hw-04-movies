import React, { Component } from "react";
import Movies from "../../services/movie-api";
import "./Cast.scss";

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/credits`, "", 1);
    this.setState({ cast: response.cast });
  }

  render() {
    return (
      <div className="Cast">
        {this.state.cast.length === 0 ? (
          <p>We don't have any results for this movie</p>
        ) : (
          this.state.cast.map(({ name, id, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p className="Character">{character}</p>
            </li>
          ))
        )}
      </div>
    );
  }
}

export default Cast;
