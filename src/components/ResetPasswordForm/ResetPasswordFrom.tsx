import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import TEXTNODES from '../../constants/textConstants';
import {
  Form, FormTitle, Label, InputConfirm,
} from '../RegistrationForm/RegistrationForm.styled';
import { TextReset } from './ResetPasswordForm.styled';
import IResetPasswordFromProps from './ResetPasswordFrom.types';
import ThemeContext from '../../utils/Context';
import { useAppDispatch } from '../../redux/hooks';
import { resetPassword } from '../../redux/auth/operations';

export default function ResetPasswordFrom({ type }: IResetPasswordFromProps) {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (type !== 'reset1') {
      return;
    }
    dispatch(resetPassword({ email }));
  };

  return (
    <Form theme={theme === 'dark'}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.RESET_PASSWORD}</FormTitle>
      {type === 'reset2' && <TextReset theme={theme === 'dark'}>You will receive an email {email} with a link to reset your password!</TextReset>}
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
      <InputConfirm theme={theme === 'dark'} type="email" name="email" id={TEXTNODES.EMAIL} placeholder="example@gmail.com" value={email} onChange={updateEmail} />
      <NavLink to={type === 'reset1' ? '/confirmReset' : '/setNewPassword'} onClick={handleClick}>Reset</NavLink>
    </Form>
  );
}
