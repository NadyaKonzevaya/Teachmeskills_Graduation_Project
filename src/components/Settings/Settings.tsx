import { useState } from 'react';
import {
  Label, Title, Wrapper, Input, Form, SettingsWrapper, LabelBottom, SwitchCheck, SwitchLabel,
  Switch, SwitchSlider, Text, Button, ButtonWrap,
} from './Settings.styled';

export default function Settings() {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };
  return (
    <SettingsWrapper>
      <Form>
        <Title>Profile</Title>
        <Wrapper>
          <Label htmlFor="name">
            Name
            <Input id="name" type="text" name="name" autoComplete="name" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input id="email" type="email" name="email" autoComplete="email" />
          </Label>

        </Wrapper>
        <Title>Password</Title>
        <Wrapper>
          <Label htmlFor="password">
            Password
            <Input id="password" type="password" name="password" placeholder="New password" autoComplete="password" />
          </Label>
          <Label htmlFor="newPassword">
            New password
            <Input id="newPassword" type="password" name="newPassword" placeholder="New password" autoComplete="new-password" />
          </Label>
          <LabelBottom htmlFor="confirmPassword">
            Confirm password
            <Input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm password" autoComplete="new-password" />
          </LabelBottom>
        </Wrapper>
        <Title>Color mode</Title>
        <Wrapper>
          <div>
            <Label>Dark</Label>
            <Text>Use dark theme</Text>
          </div>
          <Switch>
            <SwitchCheck type="checkbox" id="switch" checked={checked} onChange={toggleCheck} />
            <SwitchLabel htmlFor="switch">
              <SwitchSlider checked={checked} readOnly />
            </SwitchLabel>
          </Switch>
        </Wrapper>
        <ButtonWrap>
          <Button type="submit">Cancel</Button>
          <Button type="submit">Save</Button>
        </ButtonWrap>
      </Form>
    </SettingsWrapper>
  );
}
