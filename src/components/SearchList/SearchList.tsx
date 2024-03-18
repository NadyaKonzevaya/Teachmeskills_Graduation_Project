import { useMemo } from 'react';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';
import { useAppSelector } from '../../redux/hooks';
import { getMoviesSelector } from '../../redux/selectors';
import { GeneralMovieList } from '../GeneralMovieList';
import { genres } from '../../utils/constants';
import { getMoviesWithUpdatedGenres } from '../../utils/helperFunctions';

export default function SearchList() {
  const movies = useAppSelector(getMoviesSelector);
  const moviesUpdated = useMemo(() => getMoviesWithUpdatedGenres(movies, genres), [movies]);

  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesUpdated} />
    </MainWrapper>
  );
}
