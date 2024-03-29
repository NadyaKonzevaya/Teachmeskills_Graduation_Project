import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  RiHome6Fill, RiFireFill, RiBookmarkFill, RiSettings5Fill, RiLogoutCircleLine,
} from 'react-icons/ri';
import colors from '../../constants/colorConstants';
import { INavItemProps, INavigationProps } from './Navigation.types';

export const NavMenu = styled.nav<INavigationProps>`
  width: ${({ type }) => type === 'mobileMenu' && '220px'};
  position: ${({ type }) => type === 'mobileMenu' && 'fixed'};
  top: ${({ type }) => type === 'mobileMenu' && '0'};
  right: ${({ type }) => type === 'mobileMenu' && '0'};
  padding: ${({ type }) => type === 'mobileMenu' && '46px 49px 0px 49px'};
  z-index: ${({ type }) => type === 'mobileMenu' && '1'};
  height: ${({ type }) => type === 'mobileMenu' && '100vh'};
  background-color: ${({ theme, type }) => ((theme && type === 'mobileMenu') ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.white}`)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media screen and (min-width: 768px) {
    width: ${({ type }) => type === 'mobileMenu' && '288px'};
    padding: ${({ type }) => type === 'mobileMenu' && '56px 93px 0 72px'};
  }
  
  @media screen and (min-width: 1440px) {
    background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.black}` : `${colors.contextualColors.white}`)};
  }
`;

export const NavItem = styled(Link)<INavItemProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ active }) => (active === 'true' ? `${colors.systemColors.primary}` : `${colors.systemColors.secondary}`)};
`;

export const NavText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const HomeElement = styled(RiHome6Fill)`
  width: 20px;
  height: 20px;
`;

export const TrendsElement = styled(RiFireFill)`
  width: 20px;
  height: 20px;
`;

export const BookmarkElement = styled(RiBookmarkFill)`
  width: 20px;
  height: 20px;
`;

export const SettingsElement = styled(RiSettings5Fill)`
  width: 20px;
  height: 20px;
`;

export const LogOutElement = styled(RiLogoutCircleLine)`
  width: 20px;
  height: 20px;
`;
