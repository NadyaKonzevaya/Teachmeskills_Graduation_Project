import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import TEXTNODES from '../../constants/textConstants';
import ThemeContext from '../../utils/Context';
import {
  Form, FormTitle, Input, InputConfirm, Label,
} from '../RegistrationForm/RegistrationForm.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { resetPasswordConform } from '../../redux/auth/operations';
import { getTokensSelector, getUserSelector } from '../../redux/selectors';

export default function NewPasswordForm() {
  const { theme } = useContext(ThemeContext);
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getUserSelector);
  // const { access } = useAppSelector(getTokensSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(resetPasswordConform({
      uid: id,
      // token: access,
      new_password: newPassword,
    }));
  };

  return (
    <Form theme={theme === 'dark'}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.NEW_PASSWORD}</FormTitle>
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      <Input theme={theme === 'dark'} type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" autoComplete="new-password" />
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
      <InputConfirm theme={theme === 'dark'} type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" value={newPassword} onChange={handleChange} autoComplete="new-password" />
      <NavLink to="/" onClick={handleClick}>Set Password</NavLink>
    </Form>
  );
}
