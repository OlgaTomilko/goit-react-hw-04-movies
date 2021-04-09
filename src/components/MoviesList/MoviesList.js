import { Link, withRouter } from "react-router-dom";
import "./MoviesList.scss";

const MovieList = ({ data, location }) => {
  return (
    <div className="MovieList">
      {data.map(({ title, name, id }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              search: location.search,
              state: {
                from: location.pathname,
              },
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default withRouter(MovieList);
