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
import { formateDate } from '../../utils/formateDataFromBackEnd';
import { Recommendations } from '../Recommendations';
import TEXTNODES from '../../constants/textConstants';

export default function MovieDetails() {
  const movie = useAppSelector(getMovieDetailsSelector);
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
            <PropertyName>{TEXTNODES.YEAR}</PropertyName>
            <Value>{movie.release_date?.slice(0, 4)}</Value>
            <PropertyName>{TEXTNODES.RELEASED}</PropertyName>
            <Value>{formateDate(movie.release_date)}</Value>
            <PropertyName>{TEXTNODES.BOX_OFFICE}</PropertyName>
            <Value>
              $
              {formatedBudget}
            </Value>
            <PropertyName>{TEXTNODES.COUNTRY}</PropertyName>
            <Value>{countries}</Value>
            <PropertyName>{TEXTNODES.PRODUCTION}</PropertyName>
            <Value>{productions}</Value>
            <PropertyName>{TEXTNODES.ACTORS}</PropertyName>
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
