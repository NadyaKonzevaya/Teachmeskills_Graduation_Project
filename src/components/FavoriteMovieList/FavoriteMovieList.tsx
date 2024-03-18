import { useAppSelector } from '../../redux/hooks';
import { getFavoriteMoviesSelector } from '../../redux/selectors';
import { GeneralMovieList } from '../GeneralMovieList';
import { MainWrapper } from '../MainMovies/MainMovieList.styled';

export default function FavoriteMovieList() {
  const moviesFavorite = useAppSelector(getFavoriteMoviesSelector);
  const moviesFavoriteUpdated = moviesFavorite.map((movie) => {
    const genresNames = movie.genres!
      .map((genre: { id: number, name: string }) => [genre.id, genre.name]);
    return ({ ...movie, genre_ids: genresNames });
  });

  return (
    <MainWrapper>
      <GeneralMovieList movieList={moviesFavoriteUpdated} />
    </MainWrapper>
  );
}
