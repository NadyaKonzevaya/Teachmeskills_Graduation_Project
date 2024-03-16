import { Outlet } from 'react-router-dom';
import { Suspense, useContext, useEffect } from 'react';
import {
  Aside, BackgroundMain, CopyRightMain, MainContainerWrap,
} from './MainSharedLayout.styled';
import { Header } from '../Header';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/operations';
import TEXTNODES from '../../constants/textConstants';
import ThemeContext from '../../utils/Context';
import { Navigation } from '../Navigation';

export default function MainSharedLayout() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <BackgroundMain theme={theme === 'dark'}>
      <Header />
      <MainContainerWrap>
        <Aside>
          <Navigation />
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
