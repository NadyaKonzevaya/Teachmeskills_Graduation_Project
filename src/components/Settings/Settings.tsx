import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Label, Title, Wrapper, Input, Form, SettingsWrapper, LabelBottom, SwitchCheck, SwitchLabel,
  Switch, SwitchSlider, Text, Button, ButtonWrap, WrapperTheme,
} from './Settings.styled';
import TEXTNODES from '../../constants/textConstants';
import ThemeContext from '../../utils/Context';

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === 'dark');
  const navigate = useNavigate();

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    navigate('/movies');
  };

  return (
    <SettingsWrapper>
      <Form onSubmit={handleSubmit}>
        <Title theme={theme === 'dark'}>{TEXTNODES.PROFILE}</Title>
        <Wrapper theme={theme === 'dark'}>
          <Label htmlFor={TEXTNODES.NAME} theme={theme === 'dark'}>
            {TEXTNODES.NAME}
            <Input theme={theme === 'dark'} id="name" type="text" name={TEXTNODES.NAME} autoComplete={TEXTNODES.NAME} />
          </Label>
          <Label htmlFor={TEXTNODES.EMAIL} theme={theme === 'dark'}>
            {TEXTNODES.EMAIL}
            <Input theme={theme === 'dark'} id={TEXTNODES.EMAIL} type="email" name="email" autoComplete={TEXTNODES.EMAIL} />
          </Label>

        </Wrapper>
        <Title theme={theme === 'dark'}>{TEXTNODES.PASSWORD}</Title>
        <Wrapper theme={theme === 'dark'}>
          <Label theme={theme === 'dark'} htmlFor={TEXTNODES.PASSWORD}>
            {TEXTNODES.PASSWORD}
            <Input theme={theme === 'dark'} id={TEXTNODES.PASSWORD} type="password" name="password" placeholder="New password" autoComplete={TEXTNODES.PASSWORD} />
          </Label>
          <Label theme={theme === 'dark'} htmlFor={TEXTNODES.NEW_PASSWORD}>
            {TEXTNODES.NEW_PASSWORD}
            <Input theme={theme === 'dark'} id={TEXTNODES.NEW_PASSWORD} type="password" name="newPassword" placeholder={TEXTNODES.NEW_PASSWORD} autoComplete={TEXTNODES.NEW_PASSWORD} />
          </Label>
          <LabelBottom theme={theme === 'dark'} htmlFor={TEXTNODES.CONFIRM_PASSWORD}>
            {TEXTNODES.CONFIRM_PASSWORD}
            <Input theme={theme === 'dark'} id={TEXTNODES.CONFIRM_PASSWORD} type="password" name="confirmPassword" placeholder={TEXTNODES.CONFIRM_PASSWORD} autoComplete={TEXTNODES.CONFIRM_PASSWORD} />
          </LabelBottom>
        </Wrapper>
        <Title theme={theme === 'dark'}>{TEXTNODES.COLOR_MODE}</Title>
        <WrapperTheme theme={theme === 'dark'}>
          <div>
            <Label theme={theme === 'dark'}>{TEXTNODES.DARK}</Label>
            <Text>{TEXTNODES.USE_DARK_THEME}</Text>
          </div>
          <Switch>
            <SwitchCheck type="checkbox" id="switch" checked={checked} onChange={toggleCheck} />
            <SwitchLabel htmlFor="switch">
              <SwitchSlider checked={checked} readOnly />
            </SwitchLabel>
          </Switch>
        </WrapperTheme>
        <ButtonWrap>
          <Button type="button" theme={theme === 'dark'}>{TEXTNODES.CANCEL}</Button>
          <Button type="submit" theme={theme === 'dark'}>{TEXTNODES.SAVE}</Button>
        </ButtonWrap>
      </Form>
    </SettingsWrapper>
  );
}
