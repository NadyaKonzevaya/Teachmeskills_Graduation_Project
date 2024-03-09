import { format, parseISO } from 'date-fns';
import { IMovie } from '../redux/movies/MoviesSlice';

export function formateDate(date: string) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'dd MMMM yyyy');
  return formattedDate;
}

const getFilteredGenres = (allGenres: [number, string][], genreIds: number[]) => allGenres
  .filter((genre) => genreIds.includes(genre[0]));

export const getMoviesWithUpdatedGenres = (
  movieItems: IMovie[],
  allGenres: [number, string][],
) => movieItems.map((movie) => {
  const genreNames = getFilteredGenres(allGenres, movie.genre_ids);
  return { ...movie, genre_ids: genreNames };
});
