import { MoviesWrapper } from '../MainMovies/MainMovieList.styled';
import { Movie } from '../Movie';
import IGeneralMovieListProps from './GeneralMovieList.types';

export default function GeneralMovieList({ movieList }: IGeneralMovieListProps) {
  return (
    <MoviesWrapper>
      {!!movieList.length && (
        movieList.map(({
          id, poster_path, title, genre_ids, vote_average,
        }) => (
          <Movie
            key={id}
            genreNames={genre_ids}
            id={id}
            poster_path={poster_path}
            title={title}
            vote_average={vote_average}
          />
        ))
      )}
    </MoviesWrapper>
  );
}
