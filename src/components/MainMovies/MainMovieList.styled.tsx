import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const MoviesWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-bottom: 48px;

  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding-bottom: 56px;
  }

  @media screen and (min-width: 1024px) {
    width: 928px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    gap: 40px;
  }
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
  padding-bottom: 48px;
  grid-column: 1 / 5;

  @media screen and (min-width: 1440px) {
    grid-column: 2 / 5;
  }
`;
