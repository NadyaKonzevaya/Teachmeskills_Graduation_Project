import { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getFavoriteMoviesSelector, getMovieDetailsSelector } from '../../redux/selectors';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { BookmarkElement } from '../MainSharedLayout/MainSharedLayout.styled';
import {
  ImageWrap, LeftSide, ReactionWrap, ReactionBtn, ShareElement, RightSide, Title, Rating,
  ImdbRating, RatingWrap, Text, PropertyName, Value, PropertyWrap, Image,
} from './MovieDetails.styled';
import { fetchCastMovieDetails, fetchMovieDetails, fetchRecommendsMovieDetails } from '../../redux/movies/operations';
import { GenreList, GenteItem } from '../Movie/Movie.styled';
import { formateDate } from '../../utils/formateDataFromBackEnd';
import { Recommendations } from '../Recommendations';
import TEXTNODES from '../../constants/textConstants';
import { toggleIsFavorite } from '../../redux/movies/MoviesSlice';
import ThemeContext from '../../utils/Context';

export default function MovieDetails() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getMovieDetailsSelector);
  console.log(movie?.isFavorite);

  // const favorites = useAppSelector(getFavoriteMoviesSelector);
  const rating = useMemo(() => (movie ? Math.round(movie.vote_average * 10) / 10 : 0), [movie]);
  const formatedBudget = useMemo(() => (movie ? movie.budget.toLocaleString() : 0), [movie]);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log('useEffect');
    //     const fetchAllMovieDetails = async () => {
    //   try {
    //     const storedMovie = localStorage.getItem('movies');
    //     console.log(storedMovie);

    //     if (storedMovie) {
    //       // dispatch(setMovieDetails(storedMovie));
    //     } else {
    //       await Promise.all([
    //         dispatch(fetchMovieDetails(Number(movieId))),
    //         dispatch(fetchCastMovieDetails(Number(movieId))),
    //         dispatch(fetchRecommendsMovieDetails(Number(movieId))),
    //       ]);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    if (!movie) {
      const fetchAllMovieDetails = async () => {
        try {
          await Promise.all([
            dispatch(fetchMovieDetails(Number(movieId))),
            dispatch(fetchCastMovieDetails(Number(movieId))),
            dispatch(fetchRecommendsMovieDetails(Number(movieId))),
          ]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchAllMovieDetails();
    }
  }, [movieId, movie, movie?.isFavorite, dispatch]);

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

  const toggleFavorite = (id:number) => {
    dispatch(toggleIsFavorite(id));
  };

  return (
    movie && movie.actors && movie.recommendations && (
      <>
        {/* <MovieWrap> */}
        <LeftSide>
          <ImageWrap>
            <Image src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
          </ImageWrap>
          <ReactionWrap>
            <ReactionBtn onClick={() => toggleFavorite(movie.id)} isFavorite={movie.isFavorite}>
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
