import styled from '@emotion/styled';

export const Form = styled.form`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 40px;
  width: 574px;
  background-color: #ffffff;
  border-radius: 10px;
`;
export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #242426;
`;

export const Input = styled.input`
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid #afb2b6;
  border-radius: 10px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #80858B;
`;

export const InputLast = styled(Input)`
  margin-bottom: 8px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #80858B;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  outline: none;
  border-radius: 10px;
  background-color: #7B61FF;
  color: #ffffff;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const TextBottom = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #80858B;
  text-align: center;
`;
