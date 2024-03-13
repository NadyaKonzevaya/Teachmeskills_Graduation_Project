import styled from '@emotion/styled';
import { BsFilterRight } from 'react-icons/bs';

import { Logo } from '../RegistrationSharedLayout/RegistrationSharedLayout.styled';
import colors from '../../constants/colorConstants';

export const HeaderWrapper = styled.div`
    grid-area: header;
    padding-left: 62px;
    padding-right: 62px;
    display: grid;
    grid-template: 1fr / minmax(auto, 246px) 1fr minmax(auto, 305px);
    grid-auto-flow: column;
    align-items: center;
`;

export const LogoBlack = styled(Logo)`
    /* margin-right: 146px;     */
`;

export const SearchBarWrap = styled.div`
    position: relative;
    height: 56px;
    width: 100%;

`;

export const SearchBar = styled.input`
box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    height: 56px;
    /* max-width: 1184px; */
    width: 100%;
    background-color: ${(props) => props.theme && `${colors.backgroundColors.graphite}`};
    border:  ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`}; ;
    border-radius: 10px;
    font-size: 16px;
`;

export const BsFilterRightElement = styled(BsFilterRight)`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    fill: ${colors.contextualColors.light}
`;
