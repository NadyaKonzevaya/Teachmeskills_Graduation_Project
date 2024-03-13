import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import {
  Form, FormTitle, Label, Input, InputLast, Text, Button, TextBottom,
} from '../RegistrationForm/RegistrationForm.styled';
import TEXTNODES from '../../constants/textConstants';
import { useAppDispatch } from '../../redux/hooks';
import { logIn } from '../../redux/auth/operations';

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement | null;
    if (!emailInput!.value && !passwordInput!.value) {
      return;
    }
    dispatch(logIn({ email: emailInput!.value, password: passwordInput!.value }));
    navigate('/movies', { replace: true });

    form.reset();
  }, [dispatch, navigate]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.code === 'Enter') {
      handleSubmit(event);
    }
  }, [handleSubmit]);

  return (
    <Form autoComplete="off" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <FormTitle>{TEXTNODES.SIGN_IN}</FormTitle>
      <Label htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
      <Input type="email" name="email" id={TEXTNODES.EMAIL} placeholder="Your email" />
      <Label htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      <InputLast type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" />
      <Text>{TEXTNODES.FORGOT_PASSWORD}</Text>
      <Button type="submit">{TEXTNODES.SIGN_IN}</Button>
      <TextBottom>
        {TEXTNODES.NO_ACCOUNT}
        {' '}
        <Link to="/signUp">{TEXTNODES.SIGN_UP}</Link>
      </TextBottom>
    </Form>

  );
}
