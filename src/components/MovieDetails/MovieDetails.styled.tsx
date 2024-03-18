import styled from '@emotion/styled';
import { IoShareSocialOutline } from 'react-icons/io5';
import colors from '../../constants/colorConstants';
import ReactionBtnProps from './MovieDetails.types';
import { IRatingProps } from '../Movie/Movie.types';

export const MovieWrap = styled.div`
  display: flex;
  gap: 42px;
`;

export const LeftSide = styled.div`
  display: none;
  width: 266px;
  margin-right: 42px;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const MovieImage = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 24px;
  border-radius: 20px;
`;

export const Image = styled.img`
  width: 100%; 
  object-fit: cover;
  border-radius: 20px;
`;
export const ReactionWrap = styled.div`
  width: 100%;
`;

export const ReactionBtn = styled.button<ReactionBtnProps>`
  width: 49%;
  height: 56px;
  margin-right: 2px;
  border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.white}`)};
  color: ${colors.contextualColors.light};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ isFavorite }) => (isFavorite ? `${colors.systemColors.primary}` : `${colors.contextualColors.light}`)};
`;

export const ShareElement = styled(IoShareSocialOutline)`
  width: 20px;
  height: 20px;
`;

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 28px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Rating = styled.span<IRatingProps>`
  width: 37px;
  height: 28px;
  color: ${colors.contextualColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ rating }) => {
    if (rating >= 7) {
      return `
        background-color: ${colors.tertiaryColors.green};
      `;
    } if (rating <= 7 && rating >= 5) {
      return `
        background-color: ${colors.tertiaryColors.yellow};
      `;
    }
    return `
      background-color: ${colors.tertiaryColors.orange};
    `;
  }}
  border-radius: 6px;
`;

export const ImdbRating = styled.span`
  width: 79px;
  height: 28px;
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : ` ${colors.contextualColors.light}`)};
  color: ${colors.contextualColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PropertyName = styled.p`
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme && `${colors.contextualColors.light}`};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Value = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const PropertyWrap = styled.div`
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 16px;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
      gap: 20px;
  }
`;
