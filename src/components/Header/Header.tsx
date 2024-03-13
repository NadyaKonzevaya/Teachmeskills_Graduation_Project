import logoBlack from '../../images/logo_black.png';
import logo from '../../images/logo.png';
import {
  HeaderWrapper, SearchBar, LogoBlack, BsFilterRightElement, SearchBarWrap,
} from './Header.styled';
import { UserMenu } from '../UserMenu';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMainSharedLayoutProps } from '../MainSharedLayout/MainSharedLayout';
import ThemeContext from '../../utils/Context';

export default function Header({ changeQueryString }: IMainSharedLayoutProps) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    changeQueryString(e.target.value);
    navigate('/movies/search', { replace: true });
  };

  return (
    <HeaderWrapper>
      <LogoBlack src={theme === 'dark' ? logo : logoBlack} alt="logo" />
      <SearchBarWrap>
        <SearchBar placeholder="Search" onChange={handleChange} theme={theme === 'dark'} />
        <BsFilterRightElement />
      </SearchBarWrap>
      <UserMenu />
    </HeaderWrapper>
  );
}
