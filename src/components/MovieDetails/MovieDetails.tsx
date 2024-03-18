import { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getMovieDetailsSelector } from '../../redux/selectors';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { BookmarkElement } from '../Navigation/Navigation.styled';
import {
  ImageWrap, LeftSide, ReactionWrap, ReactionBtn, ShareElement, Title, Rating,
  ImdbRating, RatingWrap, Text, PropertyName, Value, PropertyWrap, Image, MovieImage,
} from './MovieDetails.styled';
import { fetchCastMovieDetails, fetchMovieDetails, fetchRecommendsMovieDetails } from '../../redux/movies/operations';
import { GenreList, GenteItem } from '../Movie/Movie.styled';
import { formateDate, getNamesOfMovieProperties } from '../../utils/helperFunctions';
import { Recommendations } from '../Recommendations';
import TEXTNODES from '../../constants/textConstants';
import { toggleIsFavorite } from '../../redux/movies/MoviesSlice';
import ThemeContext from '../../utils/Context';

export default function MovieDetails() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getMovieDetailsSelector);
  const rating = useMemo(() => (movie ? Math.round(movie.vote_average * 10) / 10 : 0), [movie]);
  const formatedBudget = useMemo(() => (movie ? movie.budget!.toLocaleString() : 0), [movie]);
  const { movieId } = useParams();

  console.log(movie);
  

  useEffect(() => {
    if (!movie || movie.id !== Number(movieId)) {
      dispatch(fetchMovieDetails(Number(movieId)));
    } else if (!movie.actors) {
      dispatch(fetchCastMovieDetails(Number(movieId)));
    } else if (!movie.recommendations) {
      dispatch(fetchRecommendsMovieDetails(Number(movieId)));
    }
  }, [dispatch, movie, movieId]);

  const countries = useMemo(() => getNamesOfMovieProperties(
    movie!,
    movie!.production_countries
  ), [movie]);

  const productions = useMemo(() => getNamesOfMovieProperties(
    movie!,
    movie!.production_companies), [movie]);

  const mainActors = useMemo(() => {
    const list = movie ? movie.actors : null;
    return list?.join(', ');
  }, [movie]);

  const toggleFavorite = (id:number) => {
    dispatch(toggleIsFavorite(id));
  };

  return (
    movie && !!movie.actors && !!movie.recommendations && movie.genres && (
      <>
        <LeftSide>
          <ImageWrap>
            <Image src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
          </ImageWrap>
          <ReactionWrap>
            <ReactionBtn theme={theme === 'dark'} onClick={() => toggleFavorite(movie.id)} isFavorite={movie.isFavorite}>
              <BookmarkElement />
            </ReactionBtn>
            <ReactionBtn theme={theme === 'dark'}>
              <ShareElement />
            </ReactionBtn>
          </ReactionWrap>
        </LeftSide>
        <div>
          <GenreList>
            {' '}
            {movie.genres.map((genre) => (
              <GenteItem key={genre.name}>
                {genre.name}
                <LuDot />
              </GenteItem>
            ))}
          </GenreList>
          <Title theme={theme === 'dark'}>{movie.title}</Title>
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
          <MovieImage>
            <ImageWrap>
              <Image src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
            </ImageWrap>
            <ReactionWrap>
              <ReactionBtn theme={theme === 'dark'} onClick={() => toggleFavorite(movie.id)} isFavorite={movie.isFavorite}>
                <BookmarkElement />
              </ReactionBtn>
              <ReactionBtn theme={theme === 'dark'}>
                <ShareElement />
              </ReactionBtn>
            </ReactionWrap>
          </MovieImage>
          <Text theme={theme === 'dark'}>{movie.overview}</Text>
          <PropertyWrap>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.YEAR}</PropertyName>
            <Value theme={theme === 'dark'}>{movie.release_date?.slice(0, 4)}</Value>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.RELEASED}</PropertyName>
            <Value theme={theme === 'dark'}>{formateDate(movie.release_date)}</Value>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.BOX_OFFICE}</PropertyName>
            <Value theme={theme === 'dark'}>
              $
              {formatedBudget}
            </Value>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.COUNTRY}</PropertyName>
            <Value theme={theme === 'dark'}>{countries}</Value>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.PRODUCTION}</PropertyName>
            <Value theme={theme === 'dark'}>{productions}</Value>
            <PropertyName theme={theme === 'dark'}>{TEXTNODES.ACTORS}</PropertyName>
            <Value theme={theme === 'dark'}>{mainActors}</Value>
          </PropertyWrap>
        </div>
        <Recommendations />
      </>
    )
  );
}
