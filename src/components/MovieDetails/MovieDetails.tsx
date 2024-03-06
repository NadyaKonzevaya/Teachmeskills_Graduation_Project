import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getMovieDetailsSelector } from '../../redux/selectors';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { BookmarkElement } from '../MainSharedLayout/MainSharedLayout.styled';
import {
  ImageWrap, LeftSide, MovieWrap, ReactionWrap, ReactionBtn, ShareElement, RightSide, Title, Rating,
  ImdbRating, RatingWrap, Text, PropertyName, Value, PropertyWrap, Image,
} from './MovieDetails.styled';
import { fetchCastMovieDetails, fetchMovieDetails, fetchRecommendsMovieDetails } from '../../redux/movies/operations';
import { GenreList, GenteItem } from '../Movie/Movie.styled';
import formateDate from '../../utils/formateDate';
import { Recommendations } from '../Recommendations';

export default function MovieDetails() {
  const dispatch = useAppDispatch();
  const { movieId } = useParams();
  const movie = useAppSelector(getMovieDetailsSelector);
  console.log(movie);
  const rating = useMemo(() => (movie ? Math.round(movie.vote_average * 10) / 10 : 0), [movie]);
  const formatedBudget = useMemo(() => (movie ? movie.budget.toLocaleString() : 0), [movie]);
  const countries = useMemo(() => {
    const list = movie ? movie.production_countries.map((country) => country.name) : null;
    if (list?.length === 1) {
      return list;
    }
    return list?.join(', ');
  }, [movie]);
  const productions = useMemo(() => {
    const list = movie ? movie.production_companies.map((production) => production.name) : null;
    if (list?.length === 1) {
      return list;
    }
    return list?.join(', ');
  }, [movie]);

  const mainActors = useMemo(() => {
    const list = movie ? movie.actors : null;
    return list?.join(', ');
  }, [movie]);

  useEffect(() => {
    Promise.all([
      fetchMovieDetails(Number(movieId)),
      fetchCastMovieDetails(Number(movieId)),
      fetchRecommendsMovieDetails(Number(movieId)),
    ]).then(([movieDetails, castDetails, recommendDetails]) => {
      dispatch(movieDetails);
      dispatch(castDetails);
      dispatch(recommendDetails);
    }).catch((error) => {
      console.log('ошибка в загрузке деталей фильма', error);
    });
  }, [dispatch, movieId]);

  return (
    movie && movie.actors && movie.recommendations && (
      <>
        {/* <MovieWrap> */}
          <LeftSide>
            <ImageWrap>
              <Image src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
            </ImageWrap>
            <ReactionWrap>
              <ReactionBtn>
                <BookmarkElement />
              </ReactionBtn>
              <ReactionBtn>
                <ShareElement />
              </ReactionBtn>
            </ReactionWrap>
          </LeftSide>
          <RightSide>
            <GenreList>
              {' '}
              {movie.genres.map((genre) => (
                <GenteItem key={genre.name}>
                  {genre.name}
                  <LuDot />
                </GenteItem>
              ))}
            </GenreList>
            <Title>{movie.title}</Title>
            <RatingWrap>
              <Rating rating={movie.vote_average}>{rating}</Rating>
              <ImdbRating>
                IMDb
                {' '}
                {rating}
              </ImdbRating>
              <ImdbRating>
                {movie.runtime}
                {' '}
                min
              </ImdbRating>
            </RatingWrap>
            <Text>{movie.overview}</Text>
            <PropertyWrap>
              <PropertyName>Year</PropertyName>
              <Value>{movie.release_date?.slice(0, 4)}</Value>
              <PropertyName>Released</PropertyName>
              <Value>{formateDate(movie.release_date)}</Value>
              <PropertyName>BoxOffice</PropertyName>
              <Value>
                $
                {formatedBudget}
              </Value>
              <PropertyName>Country</PropertyName>
              <Value>{countries}</Value>
              <PropertyName>Production</PropertyName>
              <Value>{productions}</Value>
              <PropertyName>Actors</PropertyName>
              <Value>{mainActors}</Value>
              {/* <PropertyName>
          Director:
          <Value />
        </PropertyName> */}
            </PropertyWrap>
          </RightSide>
        {/* </MovieWrap> */}
        <Recommendations />
      </>
    )
  );
}
