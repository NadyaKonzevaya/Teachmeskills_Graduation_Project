import { useState } from 'react';
import {
  Label, Title, Wrapper, Input, Form, SettingsWrapper, LabelBottom, SwitchCheck, SwitchLabel,
  Switch, SwitchSlider, Text, Button, ButtonWrap,
} from './Settings.styled';
import TEXTNODES from '../../constants/textConstants';

export default function Settings() {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };
  return (
    <SettingsWrapper>
      <Form>
        <Title>{TEXTNODES.PROFILE}</Title>
        <Wrapper>
          <Label htmlFor={TEXTNODES.NAME}>
            {TEXTNODES.NAME}
            <Input id="name" type="text" name={TEXTNODES.NAME} autoComplete={TEXTNODES.NAME} />
          </Label>
          <Label htmlFor={TEXTNODES.EMAIL}>
            {TEXTNODES.EMAIL}
            <Input id={TEXTNODES.EMAIL} type="email" name="email" autoComplete={TEXTNODES.EMAIL} />
          </Label>

        </Wrapper>
        <Title>{TEXTNODES.PASSWORD}</Title>
        <Wrapper>
          <Label htmlFor={TEXTNODES.PASSWORD}>
            {TEXTNODES.PASSWORD}
            <Input id={TEXTNODES.PASSWORD} type="password" name="password" placeholder="New password" autoComplete={TEXTNODES.PASSWORD} />
          </Label>
          <Label htmlFor={TEXTNODES.NEW_PASSWORD}>
            {TEXTNODES.NEW_PASSWORD}
            <Input id={TEXTNODES.NEW_PASSWORD} type="password" name="newPassword" placeholder={TEXTNODES.NEW_PASSWORD} autoComplete={TEXTNODES.NEW_PASSWORD} />
          </Label>
          <LabelBottom htmlFor={TEXTNODES.CONFIRM_PASSWORD}>
            {TEXTNODES.CONFIRM_PASSWORD}
            <Input id={TEXTNODES.CONFIRM_PASSWORD} type="password" name="confirmPassword" placeholder={TEXTNODES.CONFIRM_PASSWORD} autoComplete={TEXTNODES.CONFIRM_PASSWORD} />
          </LabelBottom>
        </Wrapper>
        <Title>{TEXTNODES.COLOR_MODE}</Title>
        <Wrapper>
          <div>
            <Label>{TEXTNODES.DARK}</Label>
            <Text>{TEXTNODES.USE_DARK_THEME}</Text>
          </div>
          <Switch>
            <SwitchCheck type="checkbox" id="switch" checked={checked} onChange={toggleCheck} />
            <SwitchLabel htmlFor="switch">
              <SwitchSlider checked={checked} readOnly />
            </SwitchLabel>
          </Switch>
        </Wrapper>
        <ButtonWrap>
          <Button type="submit">{TEXTNODES.CANCEL}</Button>
          <Button type="submit">{TEXTNODES.SAVE}</Button>
        </ButtonWrap>
      </Form>
    </SettingsWrapper>
  );
}
