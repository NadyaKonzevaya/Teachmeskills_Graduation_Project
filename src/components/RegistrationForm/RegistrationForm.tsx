import { IRegistrationFormProps } from './RegistrationForm.types';
import {
  Form, FormTitle, Label, Input, InputLast, Text, Button, TextBottom, InputConfirm,
} from './RegistrationForm.styled';
import { Link } from 'react-router-dom';

export default function RegistrationForm({ type }: IRegistrationFormProps) {
  return (
    <Form>
      <FormTitle>{type}</FormTitle>
      {type === 'Sign Up' && (
        <>
          <Label htmlFor="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="Your name" />
        </>
      )}
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Your email" />
      <Label htmlFor="password">Password</Label>
      {type === 'Sign In' ? <InputLast type="password" name="password" id="password" placeholder="Your password" /> : <Input type="password" name="password" id="password" placeholder="Your password" />}
      {type === 'Sign Up' && (
        <>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <InputConfirm type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
        </>
      )}
      {type === 'Sign In' && <Text>Forgot password?</Text>}
      <Button type="submit">{type === 'Sign In' ? 'Sign in' : 'Sign up'}</Button>
      <TextBottom>
        {type === 'Sign In' ? 'Don’t have an account?' : 'Already have an account?'}
        {' '}
        <Link to={type === 'Sign In' ? '/signUp' : '/'}>{type === 'Sign In' ? 'Sign up' : 'Sign in'}</Link>
      </TextBottom>
    </Form>

  );
}
