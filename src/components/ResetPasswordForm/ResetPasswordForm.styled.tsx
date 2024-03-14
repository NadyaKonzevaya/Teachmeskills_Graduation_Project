import styled from '@emotion/styled';
import { Button, Text } from '../RegistrationForm/RegistrationForm.styled';
import colors from '../../constants/colorConstants';

export const ButtonBottom = styled(Button)`
    margin-bottom: 0;
`;

export const TextReset = styled(Text)`
  font-size: 16px;
  color: ${(props) => props.theme && `${colors.contextualColors.white}`}
`;
