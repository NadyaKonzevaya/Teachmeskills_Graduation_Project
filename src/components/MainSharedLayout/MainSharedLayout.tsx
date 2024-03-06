import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Aside, BackgroundMain, BookmarkElement, CopyRightMain, HomeElement, MainContainerWrap,
  NavItem, NavMenu, NavText, SettingsElement, TrendsElement,
} from './MainSharedLayout.styled';
import { Header } from '../Header';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/operations';

export default function MainSharedLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <BackgroundMain>
      <Header />
      <MainContainerWrap>
        <Aside>
          <NavMenu>
            <NavItem>
              <HomeElement />
              <NavText>Home</NavText>
            </NavItem>
            <NavItem>
              <TrendsElement />
              <NavText>Trends</NavText>
            </NavItem>
            <NavItem>
              <BookmarkElement />
              <NavText>Favorites</NavText>
            </NavItem>
            <NavItem>
              <SettingsElement />
              <NavText>Settings</NavText>
            </NavItem>
          </NavMenu>
        </Aside>
        <CopyRightMain>&#169; All Rights Reserved</CopyRightMain>
        <Outlet />
      </MainContainerWrap>
    </BackgroundMain>
  );
}
