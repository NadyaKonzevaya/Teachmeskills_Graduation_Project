import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Aside, BackgroundMain, BookmarkElement, CopyRightMain, HomeElement, MainContainerWrap,
  NavItem, NavMenu, NavText, SettingsElement, TrendsElement,
} from './MainSharedLayout.styled';
import { Header } from '../Header';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/operations';
import TEXTNODES from '../../constants/textConstants';

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
              <NavText>{TEXTNODES.HOME}</NavText>
            </NavItem>
            <NavItem>
              <TrendsElement />
              <NavText>{TEXTNODES.TRENDS}</NavText>
            </NavItem>
            <NavItem>
              <BookmarkElement />
              <NavText>{TEXTNODES.FAVORITES}</NavText>
            </NavItem>
            <NavItem>
              <SettingsElement />
              <NavText>{TEXTNODES.SETTINGS}</NavText>
            </NavItem>
          </NavMenu>
        </Aside>
        <CopyRightMain>
          &#169;
          {TEXTNODES.RIGHTS}
        </CopyRightMain>
        <Outlet />
      </MainContainerWrap>
    </BackgroundMain>
  );
}
