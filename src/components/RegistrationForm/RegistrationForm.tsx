import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import {
  Form, FormTitle, Label, Input, Button, TextBottom, InputConfirm,
} from './RegistrationForm.styled';
import TEXTNODES from '../../constants/textConstants';
import { useAppDispatch } from '../../redux/hooks';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userNameInput = form.elements.namedItem('userName') as HTMLInputElement | null;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement | null;
    const passwordConfirmInput = form.elements.namedItem('confirmPassword') as HTMLInputElement | null;
    if (userNameInput!.value && emailInput && passwordInput!.value === passwordConfirmInput!.value) {
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
    <Form autoComplete="off" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <FormTitle>{TEXTNODES.SIGN_UP}</FormTitle>
      <Label htmlFor={TEXTNODES.NAME}>{TEXTNODES.NAME}</Label>
      <Input type="name" name="userName" id={TEXTNODES.NAME} placeholder="Your name" />
      <Label htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
      <Input type="email" name="email" id={TEXTNODES.EMAIL} placeholder="Your email" />
      <Label htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      <Input type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" autoComplete="password" />
      <Label htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
      <InputConfirm type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" autoComplete="confirm-password" />
      <Button type="submit">{TEXTNODES.SIGN_UP}</Button>
      <TextBottom>
        {TEXTNODES.HAVE_ACCOUNT}
        {' '}
        <Link to="/">{TEXTNODES.SIGN_IN}</Link>
      </TextBottom>
    </Form>
  );
}
