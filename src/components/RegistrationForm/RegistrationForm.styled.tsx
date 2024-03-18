import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 48px;
  margin-bottom: 48px;
  padding: 24px;
  width: 100%;
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.white}`)};
  border-radius: 10px;

  @media screen and (min-width: 550px) {
    width: 574px;
    padding: 40px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => (theme ? `${colors.contextualColors.white}` : `${colors.backgroundColors.dark}`)};
`;

export const Input = styled.input`
  font-size: 16px;
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  border: ${({ theme }) => theme && `2px solid ${colors.contextualColors.light}`};
  border-radius: 10px;
  margin-bottom: 24px;
  color: ${colors.systemColors.secondary};
  background-color: ${({ theme }) => theme && `${colors.backgroundColors.graphite}`};
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
  font-size: 14px;
  margin: 0;
  color:${colors.systemColors.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
