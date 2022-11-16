import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import PrivateRoute from '../../components/PrivateRoute';
import './styles.css';

const Movie = () => {
  return (
    <PrivateRoute path="/movies">
      <div className="movies-page-container">
        <div className="movies-page-title">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="movies-list">
          <PrivateRoute path="/movies/1">
            <Link to="/movies/1">
              <MovieCard movieId={1} />
            </Link>
          </PrivateRoute>
          <Link to="/movies/2">
            <MovieCard movieId={2} />
          </Link>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Movie;
