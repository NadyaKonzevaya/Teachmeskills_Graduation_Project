import { useEffect, useMemo, useState } from 'react';
import { IMovie } from '../../redux/interfaces';
import { GeneralMovieList } from '../GeneralMovieList';
import { fetchTrends } from '../../redux/movies/operations';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';
import { genres } from '../../utils/constants';
import { getMoviesWithUpdatedGenres } from '../../utils/helperFunctions';

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
