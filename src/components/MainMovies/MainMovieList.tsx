import { useMemo, useState } from 'react';
import { ShowMoreButton, MoviesWrapper, MainWrapper } from './MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoreMovies } from '../../redux/movies/operations';
import { getIsLoadingSelector, getMoviesSelector } from '../../redux/selectors';
import { genres } from '../../utils/constants';
import { Loading } from '../Loading';
import { Movie } from '../Movie';
import { getMoviesWithUpdatedGenres } from '../../utils/formateDataFromBackEnd';
import TEXTNODES from '../../constants/textConstants';

export default function MainMovieList() {
  const [page, setPage] = useState(3);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);

  const moviesUpdated = useMemo(() => getMoviesWithUpdatedGenres(movies, genres), [movies]);
  const handleFetchMoreMovies = () => {
    dispatch(fetchMoreMovies({ page })).then(setPage(page + 1));
  };

  return (
    <MainWrapper>
      <MoviesWrapper>
        {!!moviesUpdated.length && (
          moviesUpdated.map(({
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
      <ShowMoreButton type="button" onClick={handleFetchMoreMovies}>
        <span>{TEXTNODES.SHOW_MORE}</span>
        { isLoading && <Loading />}
        {/* <Loading /> */}
      </ShowMoreButton>
    </MainWrapper>
  );
}
