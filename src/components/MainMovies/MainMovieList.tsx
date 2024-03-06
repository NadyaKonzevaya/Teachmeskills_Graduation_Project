import { useState } from 'react';
import { ShowMoreButton, MoviesWrapper, MainWrapper } from './MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoreMovies } from '../../redux/movies/operations';
import { getIsLoadingSelector, getMoviesSelector } from '../../redux/selectors';
import { genres } from '../../utils/constants';
import { Loading } from '../Loading';
import { Movie } from '../Movie';

export default function MainMovieList() {
  const [page, setPage] = useState(3);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);

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
        {/* <Loading /> */}
      </ShowMoreButton>
    </MainWrapper>
  );
}
