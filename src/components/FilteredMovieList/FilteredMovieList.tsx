import { useState } from 'react';
import { MainWrapper, MoviesWrapper, ShowMoreButton } from '../MainMovies/MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getIsLoadingSelector, getMoviesSelector } from '../../redux/selectors';
import { genres } from '../../utils/constants';
import { Movie } from '../Movie';
import { Loading } from '../Loading';
import { fetchMoreMovies } from '../../redux/movies/operations';

export default function FilteredMovieList() {
  const [page, setPage] = useState(2);
  const movies = useAppSelector(getMoviesSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);
  const dispatch = useAppDispatch();

  const handleFetchMoreMovies = () => {
    dispatch(fetchMoreMovies({ page })).then(setPage(page + 1));
  };

  return (
    <MainWrapper>
      <MoviesWrapper>
        {movies.length > 0 && (
          movies.map(({
            id, poster_path, title, genre_ids, vote_average,
          }) => {
            const genreNames = genre_ids.reduce((acc, genreId) => {
              if (genres[genreId]) {
                acc.push(genres[genreId]);
              }
              return acc;
            }, []);
            return (
              <Movie
                key={id}
                genreNames={genreNames}
                id={id}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
              />
            );
          })
        )}
      </MoviesWrapper>
      <ShowMoreButton type="button" onClick={handleFetchMoreMovies}>
        <span>Show more</span>
        { isLoading && <Loading />}
      </ShowMoreButton>
    </MainWrapper>
  );
}
