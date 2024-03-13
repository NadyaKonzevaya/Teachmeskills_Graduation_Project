import { Outlet } from 'react-router-dom';
import { Suspense, useContext, useEffect, useState } from 'react';
import {
  Aside, BackgroundMain, BookmarkElement, CopyRightMain, HomeElement, MainContainerWrap,
  NavItem, NavMenu, NavText, SettingsElement, TrendsElement,
} from './MainSharedLayout.styled';
import { Header } from '../Header';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/operations';
import TEXTNODES from '../../constants/textConstants';
import ThemeContext from '../../utils/Context';

export interface IMainSharedLayoutProps {
  changeQueryString: (queryString: string) => void;
}

const NavItems = [
  [HomeElement, TEXTNODES.HOME, '/movies'],
  [TrendsElement, TEXTNODES.TRENDS, '/movies/trends'],
  [BookmarkElement, TEXTNODES.FAVORITES, '/movies/favorites'],
  [SettingsElement, TEXTNODES.SETTINGS, '/movies/settings'],
];

export default function MainSharedLayout({ changeQueryString }: IMainSharedLayoutProps) {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const [activeLink, setActiveLink] = useState(TEXTNODES.HOME);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <BackgroundMain theme={theme === 'dark'}>
      <Header changeQueryString={changeQueryString} />
      <MainContainerWrap>
        <Aside>
          <NavMenu>
            {NavItems.map((navItem) => {
              const Component = navItem[0];
              return (
                <NavItem key={navItem[1]} to={navItem[2]} onClick={() => setActiveLink(navItem[1])} active={navItem[1] === activeLink ? 'true' : 'false'}>
                  <Component />
                  <NavText>{navItem[1]}</NavText>
                </NavItem>
              );
            })}
          </NavMenu>
        </Aside>
        <CopyRightMain>
          &#169;
          {TEXTNODES.RIGHTS}
        </CopyRightMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainerWrap>
    </BackgroundMain>
  );
}
