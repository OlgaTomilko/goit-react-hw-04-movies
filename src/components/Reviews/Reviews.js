import React, { Component } from "react";
import Movies from "../../services/movie-api";
import "./Reviews.scss";

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Movies.getMovies(`/movie/${movieId}/reviews`, "", 1);
    this.setState({ reviews: response.results });
  }

  render() {
    return (
      <div className="Reviews">
        {this.state.reviews.length === 0 ? (
          <p className="Notification">
            We don't have any reviews for this movie
          </p>
        ) : (
          this.state.reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p className="Author">{author}</p>
              <p className="Content">{content}</p>
            </li>
          ))
        )}
      </div>
    );
  }
}

export default Reviews;
