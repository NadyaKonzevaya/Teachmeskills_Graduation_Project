import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import colors from '../../constants/colorConstants';

export const Wrap = styled.div`
grid-area: 2 / 3;
grid-column: 3 / 5;
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const BtnWrap = styled.div`
position: relative;
    width: 64px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonPrev = styled.div`
position: static;
    margin: 0;
    width: 15px !important; 
    display: block;
    color: ${colors.backgroundColors.graphite};
    margin-right: 16px;
    &::after {
    content: ''; 
    display: none;
    }
`;

export const FaArrowLeftElement = styled(FaArrowLeft)`
    width: 10px;
    fill: ${colors.backgroundColors.graphite};
`;

export const FaArrowRightElement = styled(FaArrowRight)`
    width: 10px;
    fill: ${colors.backgroundColors.graphite};
`;

export const ButtonNext = styled.div`
position: static;
    margin: 0;
    display: block;
    width: 15px !important;
    color: ${colors.backgroundColors.graphite};
    &::after {
    content: ''; 
    display: none;
    }
`;
