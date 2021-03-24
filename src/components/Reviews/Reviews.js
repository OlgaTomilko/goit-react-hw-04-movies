import React, { Component } from "react";
import Movies from "../../services/movie-api";

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/reviews`, "", 1);
    this.setState({ reviews: response.results });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.reviews.map(({ author, id, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </div>
    );
  }
}

export default Reviews;
