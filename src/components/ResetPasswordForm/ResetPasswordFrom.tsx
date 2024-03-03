// import { IRegistrationFormProps } from './RegistrationForm.types';
import {
  Form, FormTitle, Label, Input, InputLast, Button, TextBottom, InputConfirm,
} from '../RegistrationForm/RegistrationForm.styled';
import { ButtonBottom, TextReset } from './ResetPasswordForm.styled';
// import { Link } from 'react-router-dom';

import IResetPasswordFromProps from './ResetPasswordFrom.types';

export default function ResetPasswordFrom({ type }: IResetPasswordFromProps) {
  return (
    <Form>
      <FormTitle>Reset Password</FormTitle>
      {type === 'reset2' && <TextReset>You will receive an email example@gmail.com with a link to reset your password!</TextReset>}
      {(type === 'reset1' || type === 'reset2') && (
        <>
          <Label htmlFor="email">Email</Label>
          <InputConfirm type="email" name="email" id="email" placeholder="example@gmail.com" />
        </>
      )}
      {type === 'newPassword' && (
      <>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Your password" />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <InputConfirm type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
      </>
      )}
      {/* <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Your email" />
      <Label htmlFor="password">Password</Label>
      {type === 'Sign In' ? <InputLast type="password" name="password" id="password" placeholder="Your password" /> : <Input type="password" name="password" id="password" placeholder="Your password" />}
      {type === 'Sign Up' && (
        <>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <InputConfirm type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
        </>
      )}
      {type === 'Sign In' && <Text>Forgot password?</Text>} */}
      <ButtonBottom type="submit">{(type === 'reset1' || type === 'reset2') ? 'Reset' : 'Set Password'}</ButtonBottom>
      {/* <TextBottom>
        {type === 'Sign In' ? 'Don’t have an account?' : 'Already have an account?'}
        {' '}
        <Link to={type === 'Sign In' ? '/signUp' : '/'}>{type === 'Sign In' ? 'Sign up' : 'Sign in'}</Link>
      </TextBottom> */}
    </Form>

  );
}
