import { useEffect, useMemo, useState } from 'react';
import { IMovie } from '../../redux/movies/MoviesSlice';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import { fetchTrends } from '../../redux/movies/operations';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';
import { genres } from '../../utils/constants';
import { getMoviesWithUpdatedGenres } from '../../utils/formateDataFromBackEnd';

export default function TrendsMovieList() {
  const [trends, setTrends] = useState<IMovie[]>([]);
  const trendsUpdated = useMemo(() => getMoviesWithUpdatedGenres(trends, genres), [trends]);
  useEffect(() => {
    fetchTrends().then(setTrends);
  }, [trends]);

  return (
    <MainWrapper>
      <GeneralMovieList movieList={trendsUpdated} />
    </MainWrapper>
  );
}
