import { Link } from 'react-router-dom';
import { IRegistrationFormProps } from './RegistrationForm.types';
import {
  Form, FormTitle, Label, Input, InputLast, Text, Button, TextBottom, InputConfirm,
} from './RegistrationForm.styled';
import TEXTNODES from '../../constants/textConstants';

export default function RegistrationForm({ type }: IRegistrationFormProps) {
  return (
    <Form>
      <FormTitle>{type}</FormTitle>
      {type === 'Sign Up' && (
        <>
          <Label htmlFor={TEXTNODES.NAME}>{TEXTNODES.NAME}</Label>
          <Input type="name" name="name" id={TEXTNODES.NAME} placeholder="Your name" />
        </>
      )}
      <Label htmlFor={TEXTNODES.EMAIL}>{TEXTNODES.EMAIL}</Label>
      <Input type="email" name="email" id={TEXTNODES.EMAIL} placeholder="Your email" />
      <Label htmlFor={TEXTNODES.PASSWORD}>{TEXTNODES.PASSWORD}</Label>
      {type === 'Sign In' ? <InputLast type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" /> : <Input type="password" name="password" id={TEXTNODES.PASSWORD} placeholder="Your password" />}
      {type === 'Sign Up' && (
        <>
          <Label htmlFor={TEXTNODES.CONFIRM_PASSWORD}>{TEXTNODES.CONFIRM_PASSWORD}</Label>
          <InputConfirm type="password" name="confirmPassword" id={TEXTNODES.CONFIRM_PASSWORD} placeholder="Confirm password" />
        </>
      )}
      {type === 'Sign In' && <Text>{TEXTNODES.FORGOT_PASSWORD}</Text>}
      <Button type="submit">{type === 'Sign In' ? 'Sign in' : 'Sign up'}</Button>
      <TextBottom>
        {type === 'Sign In' ? 'Don’t have an account?' : 'Already have an account?'}
        {' '}
        <Link to={type === 'Sign In' ? '/signUp' : '/'}>{type === 'Sign In' ? 'Sign up' : 'Sign in'}</Link>
      </TextBottom>
    </Form>

  );
}
