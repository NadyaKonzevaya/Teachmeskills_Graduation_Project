import { useContext, useState } from 'react';
import {
  UserMenuWrap, Letters, Name, MdKeyboardArrowDownElement, Button,
} from './UserMenu.styled';
import ThemeContext from '../../utils/Context';
import { useAppSelector } from '../../redux/hooks';
import { getUserSelector } from '../../redux/selectors';

export default function UserMenu() {
  const { theme } = useContext(ThemeContext);
  const user = useAppSelector(getUserSelector);
  const letters = user?.slice(0, 2).toUpperCase();

  return (
    <UserMenuWrap>
      <Letters>{letters}</Letters>
      <Name theme={theme === 'dark'}>{user}</Name>
      <Button type="button" aria-label="Filters">
        <MdKeyboardArrowDownElement />
      </Button>
    </UserMenuWrap>
  );
}
