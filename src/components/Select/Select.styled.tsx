import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const SelectWrap = styled.select`
    border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${({ theme }) => theme && `${colors.backgroundColors.graphite}`};
    color: ${({ theme }) => theme && `${colors.systemColors.secondary}`};
`;
