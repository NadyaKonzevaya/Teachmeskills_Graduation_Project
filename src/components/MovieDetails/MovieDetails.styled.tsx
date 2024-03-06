import styled from '@emotion/styled';
import { IoShareSocialOutline } from 'react-icons/io5';
import colors from '../../constants/colorConstants';

export const MovieWrap = styled.div`
    display: flex;
    gap: 42px;
`;

export const LeftSide = styled.div`
    width: 266px;
    margin-right: 42px;
`;

export const ImageWrap = styled.div`
     width: 266px;
    height: 357px;
    overflow: hidden;
    margin-bottom: 32px;
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

export const ReactionBtn = styled.button`
width: 49%;
height: 56px;
margin-right: 2px;
border: 2px solid ${colors.contextualColors.light};
background-color: ${colors.contextualColors.white};
color: ${colors.contextualColors.light};
display: inline-flex;
align-items: center;
justify-content: center;
`;

export const ShareElement = styled(IoShareSocialOutline)`
    width: 20px;
    height: 20px;
`;

export const RightSide = styled.div`
    
`;

export const Title = styled.h2`
margin-top: 10px;
    margin-bottom: 24px;
`;

export const RatingWrap = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
`;

export const Rating = styled.span`
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
    background-color: ${colors.contextualColors.light};
    color: ${colors.contextualColors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;

export const Text = styled.p`
margin-top: 0;
    margin-bottom: 40px;
`;

export const PropertyName = styled.p`
/* margin-bottom: 20px; */
font-weight: 600;
margin: 0;
    `;
export const Value = styled.span`
    font-weight: 500;
`;

export const PropertyWrap = styled.div`
    display: grid;
    grid-template-columns: 136px 1fr;
    gap: 20px;
    margin-bottom: 56px;
`;