import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logoBlack from '../../images/logo_black.png';
import logo from '../../images/logo.png';
import {
  HeaderWrapper, SearchBar, LogoBlack, BsFilterRightElement, SearchBarWrap,
} from './Header.styled';
import { UserMenu } from '../UserMenu';
import ThemeContext from '../../utils/Context';
import { fetchMoviesByQuery } from '../../redux/movies/operations';

export default function Header() {
  const [queryString, setQueryString] = useState('');
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setQueryString(inputValue);
    dispatch(fetchMoviesByQuery(queryString));
    navigate('/movies/search');
  }, [dispatch, navigate, queryString]);

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
