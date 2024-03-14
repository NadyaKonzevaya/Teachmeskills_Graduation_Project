import { useContext, useEffect, useMemo } from 'react';
import { ShowMoreButton, MainWrapper } from './MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoreMovies, fetchMovies } from '../../redux/movies/operations';
import { getIsLoadingSelector, getMoviesSelector } from '../../redux/selectors';
import { genres } from '../../utils/constants';
import { Loading } from '../Loading';
import { getMoviesWithUpdatedGenres } from '../../utils/helperFunctions';
import TEXTNODES from '../../constants/textConstants';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import ThemeContext from '../../utils/Context';

export default function MainMovieList() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  const moviesUpdated = useMemo(() => getMoviesWithUpdatedGenres(movies, genres), [movies]);

  const handleFetchMoreMovies = () => {
    const pageNum = Math.floor(movies.length / 20) + 1;
    dispatch(fetchMoreMovies({ page: pageNum })).then(() => {
    });
  };
  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesUpdated} />
      <ShowMoreButton type="button" onClick={handleFetchMoreMovies} theme={theme === 'dark'}>
        <span>{TEXTNODES.SHOW_MORE}</span>
        { isLoading && <Loading />}
      </ShowMoreButton>
    </MainWrapper>
  );
}
