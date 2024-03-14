import { useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getFavoriteMoviesSelector } from '../../redux/selectors';
import GeneralMovieList from '../GeneralMovieList/GeneralMovieList';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';

export default function FavoriteMovieList() {
  const moviesFavorite = useAppSelector(getFavoriteMoviesSelector);
  const moviesFavoriteUpdated = useMemo(
    () => moviesFavorite.map((movie) => {
      const genresNames = movie.genres!.map((genre) => Object.values(genre));
      return ({ ...movie, genre_ids: genresNames });
    }),
    [moviesFavorite],
  );

  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesFavoriteUpdated} />
    </MainWrapper>
  );
}
