import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TEXTNODES from '../../constants/textConstants';
// import {
//   Form, FormTitle, Label, Input, InputConfirm,
// } from '../RegistrationForm/RegistrationForm.styled';
// import { ButtonBottom, TextReset } from './ResetPasswordForm.styled';
// import IResetPasswordFromProps from './ResetPasswordFrom.types';
import ThemeContext from '../../utils/Context';
import { Form, FormTitle } from '../RegistrationForm/RegistrationForm.styled';
import { TextReset } from '../ResetPasswordForm/ResetPasswordForm.styled';
import { useAppDispatch } from '../../redux/hooks';
import { setLogInTrue } from '../../redux/auth/authSlice';

export default function Confirmation() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setLogInTrue());
  };
  return (
    <Form theme={theme === 'dark'}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.WELCOME}</FormTitle>
      <TextReset theme={theme === 'dark'}>
        Thank you for your registration!
      </TextReset>
      <Link onClick={handleClick} to="/movies">Go to account</Link>
    </Form>
  );
}
