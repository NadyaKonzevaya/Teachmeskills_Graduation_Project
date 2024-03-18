import styled from '@emotion/styled';

import colors from '../../constants/colorConstants';
import { CopyRight } from '../RegistrationSharedLayout/RegistrationSharedLayout.styled';

export const BackgroundMain = styled.div`
    min-width: 320px;
    display: grid;
    padding-left: 24px;
    padding-right: 24px;
    grid-template: minmax(216px, auto) 1fr / 1fr;
    grid-template-areas: "header" "main";
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${colors.contextualColors.white};
    background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.black}` : `${colors.contextualColors.white}`)};
    
    @media screen and (min-width: 550px) {
        grid-template: minmax(144px, auto) 1fr / 1fr;
        /* grid-template-areas: "header" "main"; */
        padding-left: 40px;
        padding-right: 40px;
    }
    @media screen and (min-width: 1440px) {
        grid-template: minmax(152px, auto) 1fr / 1fr;
        padding-left: 128px;
        padding-right: 128px;
    }
    @media screen and (min-width: 1920px) {
        grid-template: minmax(136px, auto) 1fr / 1fr;
        padding-left: 62px;
        padding-right: 62px;
    }
`;

export const MainContainerWrap = styled.div`
@media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr auto; 
    grid-template-columns: minmax(auto, 306px) minmax(266px, auto) 1fr minmax(auto, 305px);
    /* padding-right: 62px; */
    padding-bottom: 64px;
}
@media screen and (min-width: 1140px) {
    grid-template-columns: minmax(auto, 306px) minmax(266px, auto) 1fr minmax(auto, 305px);
}
@media screen and (min-width: 1440px) { 
     grid-area: "main";
    grid-template-columns: minmax(306px, auto) 1fr minmax(206px, auto);
}
`;

export const Aside = styled.aside`
    display: none;
    grid-auto-flow: row;
    grid-template: minmax(136px, auto) 1fr auto / 1fr;
    padding-top: 16px;
    padding-left: 62px;
    padding-bottom: 64px;

    @media screen and (min-width: 1440px) {
        display: grid;
        padding: 0;
    }
`;

export const CopyRightMain = styled(CopyRight)`
    display: none;
    grid-row: 2/3;
    margin: 0;
    margin-left: 62px;
    text-align: left;
    align-self: self-end;
    justify-items: end;
    color: ${colors.systemColors.secondary};
    @media screen and (min-width: 1140px) {
        display: block;
    }
`;
