import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import TEXTNODES from '../../constants/textConstants';
import {
  Form, FormTitle, Label, Input, InputConfirm,
} from '../RegistrationForm/RegistrationForm.styled';
import { TextReset } from './ResetPasswordForm.styled';
import IResetPasswordFromProps from './ResetPasswordFrom.types';
import ThemeContext from '../../utils/Context';

export default function ResetPasswordFrom({ type }: IResetPasswordFromProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <Form theme={theme === 'dark'}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.RESET_PASSWORD}</FormTitle>
      {type === 'reset2' && <TextReset theme={theme === 'dark'}>You will receive an email example@gmail.com with a link to reset your password!</TextReset>}
      {(type === 'reset1' || type === 'reset2') && (
        <>
          <Label theme={theme === 'dark'} htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
          <InputConfirm theme={theme === 'dark'} type="email" name="email" id={TEXTNODES.EMAIL} placeholder="example@gmail.com" />
        </>
      )}
      {type === 'newPassword' && (
      <>
        <Label theme={theme === 'dark'} htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
        <Input theme={theme === 'dark'} type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" autoComplete="new-password" />
        <Label theme={theme === 'dark'} htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
        <InputConfirm theme={theme === 'dark'} type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" autoComplete="new-password" />
      </>
      )}
      <NavLink to={type === 'reset1' ? '/confirmReset' : '/setNewPassword'}>{(type === 'reset1' || type === 'reset2') ? 'Reset' : 'Set Password'}</NavLink>
    </Form>
  );
}
