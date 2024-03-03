import { useEffect } from 'react';
import { LuDot } from 'react-icons/lu';
import { MainWrapper } from './MainMovieList.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/operations';
import { getMoviesSelector } from '../../redux/selectors';
import {
  MovieWrap, ImgWrap, MovieImg, Title, GenreList, GenteItem, Rating,
} from '../Movie/Movie.styled';
import { IMAGE_BASE_URL, genres } from '../../utils/constants';

export default function MainMovieList() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesSelector);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <MainWrapper>
      {movies.length > 0 && (
        movies.map(({
          id, poster_path, title, genre_ids, vote_average,
        }) => {
          const genreNames = genre_ids.reduce((acc, genreId) => {
            if (genres[genreId]) {
              acc.push(genres[genreId]);
            }
            return acc;
          }, []);
          return (
            <MovieWrap key={id}>
              <ImgWrap>
                <MovieImg src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
              </ImgWrap>
              <Title>{title}</Title>
              <GenreList>
                {genreNames.map((genre) => (
                  <GenteItem key={genre}>
                    {genre}
                    <LuDot />
                  </GenteItem>
                ))}
              </GenreList>
              <Rating vote_average={vote_average}>{Math.round(vote_average)}</Rating>
            </MovieWrap>
          );
        })
      )}
    </MainWrapper>
  );
}
