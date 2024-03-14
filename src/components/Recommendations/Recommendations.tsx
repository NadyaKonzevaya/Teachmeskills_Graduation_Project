import { Swiper, SwiperSlide } from 'swiper/react';
import { useMemo } from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useAppSelector } from '../../redux/hooks';
import { getRecommendationsSelector } from '../../redux/selectors';
import {
  Wrap, TitleWrap, ButtonPrev, ButtonNext, BtnWrap, FaArrowLeftElement, FaArrowRightElement,
} from './Recommendations.styled';
import { genres } from '../../utils/constants';
import { Movie } from '../Movie';
import { Title } from '../MovieDetails/MovieDetails.styled';
import TEXTNODES from '../../constants/textConstants';
import { getMoviesWithUpdatedGenres } from '../../utils/helperFunctions';

export default function Recommendations() {
  const recommendations = useAppSelector(getRecommendationsSelector);
  const recommendationsUpdated = useMemo(() => getMoviesWithUpdatedGenres(recommendations, genres), [recommendations]);
  return (
    <Wrap>
      <TitleWrap>
        <Title>{TEXTNODES.RECOMMENDATIONS}</Title>
        <BtnWrap>
          <ButtonPrev className="swiper-button-prev"><FaArrowLeftElement /></ButtonPrev>
          <ButtonNext className="swiper-button-next"><FaArrowRightElement /></ButtonNext>
        </BtnWrap>
      </TitleWrap>

      <Swiper
        modules={[Navigation]}
        style={{ height: '400px' }}
        spaceBetween={40}
        slidesPerView={4}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {recommendationsUpdated.length > 0 && (
          recommendationsUpdated.map(({
            id, poster_path, title, genre_ids, vote_average,
          }) => (
            <SwiperSlide key={id}>
              <Movie
                genreNames={genre_ids}
                id={id}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Wrap>
  );
}
