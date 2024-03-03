import styled from '@emotion/styled';
import {
  RiHome6Fill, RiFireFill, RiBookmarkFill, RiSettings5Fill,
} from 'react-icons/ri';
import colors from '../../constants/colorConstants';
import { CopyRight } from '../RegistrationSharedLayout/RegistrationSharedLayout.styled';

export const BackgroundMain = styled.div`
    margin: 0;
    background-color: ${colors.contextualColors.white};
    min-height: 100vh;
    display: grid;
    grid-template: minmax(136px, auto) 1fr / 1fr;
    grid-template-areas: "header" "main";
`;

export const MainContainerWrap = styled.div`
    grid-area: main;
    display: grid;
    grid-template: 1fr / minmax(auto, 306px) 1fr;
`;

export const Aside = styled.aside`
    display: grid;
    grid-auto-flow: row;
    grid-template: minmax(136px, auto) 1fr auto / 1fr;
    padding-top: 16px;
    padding-left: 62px;
    padding-bottom: 64px;
`;

export const NavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 40px;
   
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${colors.systemColors.secondary};
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

export const CopyRightMain = styled(CopyRight)`
grid-row: 3/4;
margin: 0;
    text-align: left;
    justify-items: end;
    color: ${colors.systemColors.secondary};
`;
