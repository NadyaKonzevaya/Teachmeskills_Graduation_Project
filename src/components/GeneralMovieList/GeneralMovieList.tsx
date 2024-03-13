import { IMovie } from '../../redux/movies/MoviesSlice';
import { MoviesWrapper } from '../MainMovies/MainMovieList.styled';
import { Movie } from '../Movie';

interface IGeneralMovieListProps {
  movieList: IMovie[];
}

export default function GeneralMovieList({ movieList }: IGeneralMovieListProps) {
  return (
    <MoviesWrapper>
      {/* {type === 'filtered' && <span>Thriller</span>} */}
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
