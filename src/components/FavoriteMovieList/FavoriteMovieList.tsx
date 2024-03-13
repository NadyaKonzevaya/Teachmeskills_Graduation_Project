import { useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getFavoriteMoviesSelector, getMoviesSelector } from '../../redux/selectors';
// import { genres } from '../../utils/constants';
import { getMoviesWithUpdatedGenres } from '../../utils/formateDataFromBackEnd';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';

export default function FavoriteMovieList() {
  // const movies = useAppSelector(getMoviesSelector);
  // const moviesFavorite = movies.filter((movie) => movie.isFavorite);
  const moviesFavorite = useAppSelector(getFavoriteMoviesSelector);
  const moviesFavoriteUpdated = useMemo(
    () => moviesFavorite.map((movie) => {
      const genresNames = movie.genres.map((genre) => Object.values(genre));
      return ({ ...movie, genre_ids: genresNames });
    }),
    [moviesFavorite],
  );
  console.log(moviesFavoriteUpdated);

  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesFavoriteUpdated} />
    </MainWrapper>
  );
}
