import styled from '@emotion/styled';
import backgroundImage from '../../images/BackgroundImage.png';
import backgroundImageShadow from '../../images/backgroundShadow.png';

export const Background = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  padding: 48px 62px 64px 62px;
  background-color: #000000;
  background-image: linear-gradient(#00000080, #00000080),
    url(${backgroundImage}),
    url(${backgroundImageShadow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 158px;
  height: 40px;
`;

export const CopyRight = styled.p`
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`
