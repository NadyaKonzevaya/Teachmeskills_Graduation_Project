import styled from '@emotion/styled';
import backgroundImage from '../../images/BackgroundImage.png';
import backgroundImageShadow from '../../images/backgroundShadow.png';
import colors from '../../constants/colorConstants';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 32px 24px 48px 24px;
  /* padding: 48px 62px 64px 62px; */
  background-color: ${colors.backgroundColors.black};
  background-image: linear-gradient(#00000080, #00000080),
    url(${backgroundImage}),
    url(${backgroundImageShadow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;

export const Logo = styled.img`
display: block;
margin: 0 auto;
  width: 152px;
  height: 39px;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 42px;
  }
  @media screen and (min-width: 1140px) {
    width: 158px;
    height: 40px;
  }
`;

export const CopyRight = styled.p`
  color: ${colors.contextualColors.white};
  text-align: center;
`;
