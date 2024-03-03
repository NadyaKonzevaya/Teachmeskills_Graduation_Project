import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const MovieWrap = styled.li`
    flex-basis: calc((100% - 4*40px) / 5);
    position: relative;
`;

export const ImgWrap = styled.div`
    width: 266px;
    height: 357px;
    overflow: hidden;
    margin-bottom: 24px;
    border-radius: 20px;
`;

export const MovieImg = styled.img`
    max-width: 100%;
    margin: 0;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
`;

export const GenreList = styled.ul`
padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

export const GenteItem = styled.li`
    display: flex;
    align-items: center;
    
`;

export const Rating = styled.span`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 37px;
    height: 28px;
    color: ${colors.contextualColors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.tertiaryColors.green};
    ${({ vote_average }) => {
    if (vote_average >= 7) {
      return `
        background-color: ${colors.tertiaryColors.green};
      `;
    } if (vote_average <= 7 && vote_average >= 5) {
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
