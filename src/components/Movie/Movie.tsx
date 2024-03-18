import { LuDot } from 'react-icons/lu';
import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  GenreList, GenteItem, MovieImg, MovieWrap, Rating, Title,
} from './Movie.styled';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCastMovieDetails, fetchMovieDetails, fetchRecommendsMovieDetails } from '../../redux/movies/operations';
import ThemeContext from '../../utils/Context';
import { IMovie } from '../../redux/interfaces';

export default function Movie({
  genreNames, id, poster_path, title, vote_average,
}: IMovie) {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const votesCalculated = useMemo(() => Math.round(vote_average * 10) / 10, [vote_average]);
  const handleClick = async () => {
    try {
      await Promise.all([
        dispatch(fetchMovieDetails(id)),
        dispatch(fetchCastMovieDetails(id)),
        dispatch(fetchRecommendsMovieDetails(id)),
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <MovieWrap key={id}>
      <NavLink to={`/movies/${id}`} onClick={handleClick}>
        <MovieImg src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      </NavLink>
      <Title theme={theme === 'dark'}>{title}</Title>
      <GenreList>
        {genreNames!.map((genre) => (
          <GenteItem key={genre[0]}>
            {genre[1]}
            <LuDot />
          </GenteItem>
        ))}
      </GenreList>
      <Rating rating={vote_average}>{votesCalculated}</Rating>
    </MovieWrap>
  );
}
