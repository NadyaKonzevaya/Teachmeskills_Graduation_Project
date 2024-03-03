import { useAppSelector } from '../../redux/hooks';
import { getMoviesSelector } from '../../redux/selectors';
import { MovieWrap } from './Movie.styled';

export default function Movie() {
 

  return (
    movies.length > 0 && (
      movies.map(({
        id, poster_path, title, genre_ids, vote_average,
      }) => (
        <MovieWrap key={id}>
          <div>
            <img src={poster_path} alt={title} />
          </div>
          <h2>{title}</h2>
          <p>{genre_ids.map((genre) => <p>{ genre}</p>) }</p>
          <span>{vote_average}</span>
        </MovieWrap>
      )))
  );
}
