import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import TEXTNODES from '../../constants/textConstants';
// import {
//   Form, FormTitle, Label, Input, InputConfirm,
// } from '../RegistrationForm/RegistrationForm.styled';
// import { TextReset } from './ResetPasswordForm.styled';
// import IResetPasswordFromProps from './ResetPasswordFrom.types';
import ThemeContext from '../../utils/Context';
import {
  Form, FormTitle, Input, InputConfirm, Label,
} from '../RegistrationForm/RegistrationForm.styled';

export default function NewPasswordForm() {
  const { theme } = useContext(ThemeContext);
  return (
    <Form theme={theme === 'dark'}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.NEW_PASSWORD}</FormTitle>
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      <Input theme={theme === 'dark'} type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" autoComplete="new-password" />
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
      <InputConfirm theme={theme === 'dark'} type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" autoComplete="new-password" />
      <NavLink to="/">Set Password</NavLink>
    </Form>
  );
}
