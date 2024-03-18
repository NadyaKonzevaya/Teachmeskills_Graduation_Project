import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import logoBlack from '../../images/logo_black.png';
import logo from '../../images/logo.png';
import {
  HeaderWrapper, SearchBar, BsFilterRightElement, SearchBarWrap, BurgerMenu, Button, Logo,
  SearchBarWrapMobile,
} from './Header.styled';
import { UserMenu } from '../UserMenu';
import ThemeContext from '../../utils/Context';
import { fetchMoviesByQuery } from '../../redux/movies/operations';
import { Navigation } from '../Navigation';
import Backdrop from '../Backdrop/Backdrop';
import { useAppDispatch } from '../../redux/hooks';

export default function Header() {
  const [queryString, setQueryString] = useState('');
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setQueryString(inputValue);
    dispatch(fetchMoviesByQuery(queryString));
    navigate('/movies/search');
  }, [dispatch, navigate, queryString]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileMenuOpen);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(true);
  };

  return (
    <HeaderWrapper>
      {!isMobileMenuOpen && <Logo src={theme === 'dark' ? logo : logoBlack} alt="logo" />}
      <SearchBarWrap>
        <SearchBar placeholder="Search" onChange={handleChange} theme={theme === 'dark'} />
        <Button type="button" onClick={toggleFilters} aria-label="Filters">
          <BsFilterRightElement />
        </Button>
      </SearchBarWrap>
      <BurgerMenu onClick={toggleMobileMenu} isOpen={isMobileMenuOpen}>
        {
          isMobileMenuOpen
            ? <IoMdClose /> : <IoReorderThreeOutline />
}
      </BurgerMenu>
      {isMobileMenuOpen && <Navigation type="mobileMenu" toggleOpen={setIsMobileOpen} />}
      <SearchBarWrapMobile>
        <SearchBar placeholder="Search" onChange={handleChange} theme={theme === 'dark'} />
        <Button type="button" onClick={toggleFilters} aria-label="Filters">
          <BsFilterRightElement />
        </Button>
      </SearchBarWrapMobile>
      {isFiltersOpen && (<Backdrop isOpen={isFiltersOpen} handleIsOpen={setIsFiltersOpen} />)}
      <UserMenu />
    </HeaderWrapper>
  );
}
