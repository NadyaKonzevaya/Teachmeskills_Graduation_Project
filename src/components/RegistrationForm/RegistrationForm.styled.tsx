import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 40px;
  width: 574px;
  background-color: ${(props) => props.theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.white}`};
  border-radius: 10px;
`;
export const FormTitle = styled.h1`
  margin-bottom: 40px;
  color: ${(props) => props.theme && `${colors.contextualColors.white}`}
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => props.theme ? `${colors.contextualColors.white}` : `${colors.backgroundColors.dark}`};
`;

export const Input = styled.input`
font-size: 16px;
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
  border-radius: 10px;
  margin-bottom: 24px;
  color: ${colors.systemColors.secondary};
  background-color: ${(props) => props.theme && `${colors.backgroundColors.graphite}`};
`;

export const InputLast = styled(Input)`
  margin-bottom: 8px;
`;

export const InputConfirm = styled(Input)`
  margin-bottom: 40px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${colors.systemColors.secondary};
  margin-bottom: 40px;
`;

export const Button = styled.button`
  outline: none;
  border-radius: 10px;
  background-color: ${colors.systemColors.primary};
  color: ${colors.contextualColors.white};;
  height: 56px;
  margin-bottom: 32px;
`;

export const TextBottom = styled.p`
  margin: 0;
  color:${colors.systemColors.secondary};
  text-align: center;
`;
