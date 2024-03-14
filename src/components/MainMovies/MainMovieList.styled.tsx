import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const MoviesWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    list-style: none;
    margin-bottom: 64px;
`;

export const ShowMoreButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-area: 1/2;
    width: 160px;
    height: 40px;
    border-radius: 40px;
    background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.light}`)};
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
    margin-left: auto;
    margin-right: auto;
`;

export const MainWrapper = styled.div`
    grid-column: 2 / 5;
`;
