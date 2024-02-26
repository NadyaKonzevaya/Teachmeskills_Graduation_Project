import { IRegistrationFormProps } from './RegistrationForm.types';
import {
  Form, FormTitle, Label, Input, InputLast, Text, Button, TextBottom, Wrapper,
} from './RegistrationForm.styled';

export default function RegistrationForm({ type }: IRegistrationFormProps) {
  return (
      <Form>
        <FormTitle>{type}</FormTitle>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Your email" />
        <Label htmlFor="password">Email</Label>
        <InputLast type="password" name="password" id="password" placeholder="Your password" />
        <Text>Forgot password?</Text>
        <Button type="submit">Sign in</Button>
        <TextBottom>
          Don’t have an account?
          {' '}
          <a href="/">Sign Up</a>
        </TextBottom>
      </Form>
  
  );
}
