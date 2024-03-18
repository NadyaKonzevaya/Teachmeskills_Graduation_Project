import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import colors from '../../constants/colorConstants';

export const Wrap = styled.div`
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 680px) {
    width: 600px;
  }

  @media screen and (min-width: 768px) {
    grid-area: 2 / 3;
    grid-column: 2 / 5;
    width: unset;
    margin: unset;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const BtnWrap = styled.div`
  position: relative;
  width: 64px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonPrev = styled.div`
  position: static;
  margin: 0;
  width: 15px !important; 
  display: block !important;
  color: ${colors.backgroundColors.graphite};
  margin-right: 16px;
  &::after {
    content: ''; 
    display: none;
  }
`;

export const FaArrowLeftElement = styled(FaArrowLeft)`
  width: 10px;
  fill: ${colors.backgroundColors.graphite};
`;

export const FaArrowRightElement = styled(FaArrowRight)`
  width: 10px;
  fill: ${colors.backgroundColors.graphite};
`;

export const ButtonNext = styled.div`
  position: static;
  margin: 0;
  display: block !important;
  width: 15px !important;
  color: ${colors.backgroundColors.graphite};
  &::after {
    content: ''; 
    display: none;
  }
`;

export const Title = styled.h2`
  margin: 0px;
  font-size: 20px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};

  @media screen  and (min-width: 768px) {
    margin-top: 10px; 
    margin-bottom: 24px;
    font-size: 28px;
  }
`;
