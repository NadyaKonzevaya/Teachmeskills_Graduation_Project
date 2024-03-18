import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useContext } from 'react';
import {
  Form, FormTitle, Label, Input, Button, TextBottom, InputConfirm,
} from './RegistrationForm.styled';
import TEXTNODES from '../../constants/textConstants';
import { useAppDispatch } from '../../redux/hooks';
import { register } from '../../redux/auth/operations';
import ThemeContext from '../../utils/Context';

export default function RegistrationForm() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userNameInput = form.elements.namedItem('userName') as HTMLInputElement | null;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement | null;
    const passwordConfirmInput = form.elements.namedItem('confirmPassword') as HTMLInputElement | null;
    if (userNameInput!.value
      && emailInput && passwordInput!.value === passwordConfirmInput!.value) {
      dispatch(register({
        username: userNameInput!.value,
        email: emailInput!.value,
        password: passwordInput!.value,
        course_group: 1,
      }));
      navigate('/activate/:uid/:token', { replace: true });
    }
    form.reset();
  }, [dispatch, navigate]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.code === 'Enter') {
      handleSubmit(event);
    }
  }, [handleSubmit]);

  return (
    <Form theme={theme === 'dark'} autoComplete="off" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <FormTitle theme={theme === 'dark'}>{TEXTNODES.SIGN_UP}</FormTitle>
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.NAME}>{TEXTNODES.NAME}</Label>
      <Input theme={theme === 'dark'} type="name" name="userName" id={TEXTNODES.NAME} placeholder="Your name" />
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
      <Input theme={theme === 'dark'} type="email" name="email" id={TEXTNODES.EMAIL} placeholder="Your email" />
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      <Input theme={theme === 'dark'} type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" autoComplete="password" />
      <Label theme={theme === 'dark'} htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
      <InputConfirm theme={theme === 'dark'} type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" autoComplete="confirm-password" />
      <Button type="submit">{TEXTNODES.SIGN_UP}</Button>
      <TextBottom>
        {TEXTNODES.HAVE_ACCOUNT}
        {' '}
        <Link to="/">{TEXTNODES.SIGN_IN}</Link>
      </TextBottom>
    </Form>
  );
}
