import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Navigation } from 'swiper/modules';
import { useAppSelector } from '../../redux/hooks';
import { getRecommendationsSelector } from '../../redux/selectors';
import {
  Wrap, TitleWrap, ButtonPrev, ButtonNext, BtnWrap,
} from './Recommendations.styled';
import { genres } from '../../utils/constants';
import { Movie } from '../Movie';
import { Title } from '../MovieDetails/MovieDetails.styled';
import TEXTNODES from '../../constants/textConstants';

export default function Recommendations() {
  const recommendations = useAppSelector(getRecommendationsSelector);
  return (
    <Wrap>
      <TitleWrap>
        <Title>{TEXTNODES.RECOMMENDATIONS}</Title>
        <BtnWrap>
          <ButtonPrev className="swiper-button-prev"><FaArrowLeft /></ButtonPrev>
          <ButtonNext className="swiper-button-next"><FaArrowRight /></ButtonNext>
        </BtnWrap>
      </TitleWrap>

      <Swiper
        modules={[Navigation]}
        style={{ height: '400px' }}
        spaceBetween={40}
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {recommendations.length > 0 && (
          recommendations.map(({
            id, poster_path, title, genre_ids, vote_average,
          }) => {
            const genreNames = genre_ids.reduce((acc, genreId) => {
              if (genres[genreId]) {
                acc.push(genres[genreId]);
              }
              return acc;
            }, []);
            return (
              <SwiperSlide key={id}>
                <Movie
                  genreNames={genreNames}
                  id={id}
                  poster_path={poster_path}
                  title={title}
                  vote_average={vote_average}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </Wrap>
  );
}
