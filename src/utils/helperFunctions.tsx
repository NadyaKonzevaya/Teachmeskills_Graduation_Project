import { format, parseISO } from 'date-fns';
import { IMovie } from '../redux/interfaces';

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

export const getNamesOfMovieProperties = (movie: IMovie, propertyName: { name: string }[]) => {
  const list = movie ? propertyName.map((property) => property.name) : null;
  if (list?.length === 1) {
    return list;
  }
  return list?.join(', ');
};
