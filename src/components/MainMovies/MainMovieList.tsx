import { useContext, useEffect, useMemo, useState } from 'react';
import { ShowMoreButton, MainWrapper } from './MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMoreMovies } from '../../redux/movies/operations';
import { getIsLoadingSelector, getMoviesSelector } from '../../redux/selectors';
import { genres } from '../../utils/constants';
import { Loading } from '../Loading';
import { getMoviesWithUpdatedGenres } from '../../utils/formateDataFromBackEnd';
import TEXTNODES from '../../constants/textConstants';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import ThemeContext from '../../utils/Context';

export default function MainMovieList() {
  const [page, setPage] = useState(2);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesSelector);
  const isLoading = useAppSelector(getIsLoadingSelector);
  const { theme } = useContext(ThemeContext);
  
  // useEffect(() => { }, []);
  const moviesUpdated = useMemo(() => getMoviesWithUpdatedGenres(movies, genres), [movies]);
  const handleFetchMoreMovies = () => {
    dispatch(fetchMoreMovies({ page })).then(setPage(page + 1));
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
