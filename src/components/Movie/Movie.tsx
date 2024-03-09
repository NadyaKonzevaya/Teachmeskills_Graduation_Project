import { LuDot } from 'react-icons/lu';
import {
  GenreList, GenteItem, ImgWrap, MovieImg, MovieWrap, Rating, Title,
} from './Movie.styled';
import { IMAGE_BASE_URL } from '../../utils/constants';

export default function Movie({
  genreNames, id, poster_path, title, vote_average,
}) {
  return (
    <MovieWrap key={id}>
      <ImgWrap to={`/movies/${id}`}>
        <MovieImg src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      </ImgWrap>
      <Title>{title}</Title>
      <GenreList>
        {genreNames.map((genre) => {
          return (
            <GenteItem key={genre[0]}>
              {genre[1]}
              <LuDot />
            </GenteItem>
          );
        })}
      </GenreList>
      <Rating rating={vote_average}>{Math.round(vote_average * 10) / 10}</Rating>
    </MovieWrap>
  );
}
