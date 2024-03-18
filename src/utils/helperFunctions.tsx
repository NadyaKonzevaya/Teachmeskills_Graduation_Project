import { format, parseISO } from 'date-fns';
import { IMovie, IProduction } from '../redux/interfaces';

export function formateDate(date: string) {
  if (!date) {
    return;
  }
  const parsedDate = parseISO(date);
  return format(parsedDate, 'dd MMMM yyyy');
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

export const getNamesOfMovieProperties = (movie: IMovie, propertyName: IProduction[]) => {
  const list = movie ? propertyName.map((property) => property.name) : null;
  if (list?.length === 1) {
    return list;
  }
  return list?.join(', ');
};
