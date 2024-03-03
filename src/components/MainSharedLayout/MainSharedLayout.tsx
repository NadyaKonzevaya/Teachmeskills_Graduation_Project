import { Outlet } from 'react-router-dom';
import {
  Aside, BackgroundMain, BookmarkElement, CopyRightMain, HomeElement, MainContainerWrap,
  NavItem, NavMenu, NavText, SettingsElement, TrendsElement,
} from './MainSharedLayout.styled';
import { Header } from '../Header';

export default function MainSharedLayout() {
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
          <CopyRightMain>&#169; All Rights Reserved</CopyRightMain>
        </Aside>
        <Outlet />
      </MainContainerWrap>
    </BackgroundMain>
  );
}
