import { useContext } from 'react';
import TEXTNODES from '../../constants/textConstants';
import {
  Form, FormTitle, Label, Input, InputConfirm,
} from '../RegistrationForm/RegistrationForm.styled';
import { ButtonBottom, TextReset } from './ResetPasswordForm.styled';
import IResetPasswordFromProps from './ResetPasswordFrom.types';
import ThemeContext from '../../utils/Context';

export default function ResetPasswordFrom({ type }: IResetPasswordFromProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <Form>
      <FormTitle>{TEXTNODES.RESET_PASSWORD}</FormTitle>
      {type === 'reset2' && <TextReset theme={theme === 'dark'}>You will receive an email example@gmail.com with a link to reset your password!</TextReset>}
      {(type === 'reset1' || type === 'reset2') && (
        <>
          <Label htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
          <InputConfirm type="email" name="email" id={TEXTNODES.EMAIL} placeholder="example@gmail.com" />
        </>
      )}
      {type === 'newPassword' && (
      <>
        <Label htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
        <Input type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" />
        <Label htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
        <InputConfirm type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" />
      </>
      )}
      <ButtonBottom type="submit">{(type === 'reset1' || type === 'reset2') ? 'Reset' : 'Set Password'}</ButtonBottom>
    </Form>
  );
}
