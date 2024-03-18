import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const Container = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.span`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color:${colors.systemColors.primary};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 1s linear infinite;
`;
