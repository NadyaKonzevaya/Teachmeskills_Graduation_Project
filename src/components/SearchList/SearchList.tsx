import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// import { IMovie } from '../../redux/movies/MoviesSlice';
import { fetchMovies, fetchMoviesByQuery } from '../../redux/movies/operations';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';
// import { Movie } from '../Movie';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getMoviesSelector } from '../../redux/selectors';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import { genres } from '../../utils/constants';
import { getMoviesWithUpdatedGenres } from '../../utils/formateDataFromBackEnd';

interface ISearchList {
  queryString: string;
}

export default function SearchList({ queryString }: ISearchList) {
//   const [movies, setMovies] = useState<Array<IMovie>>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const movies = useAppSelector(getMoviesSelector);
  const moviesUpdated = useMemo(() => getMoviesWithUpdatedGenres(movies, genres), [movies]);
  console.log(moviesUpdated);

  //   const saveSearchedMovies = useCallback(() => {

  //   }, [dispatch, queryString]);

  useEffect(() => {
    //   console.log(queryString);

    if (queryString === '') {
      dispatch(fetchMovies());
      navigate('/movies');
    } else {
      dispatch(fetchMoviesByQuery(queryString));
    }
  }, [dispatch, navigate, queryString]);

  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesUpdated} />
    </MainWrapper>
  );
}
