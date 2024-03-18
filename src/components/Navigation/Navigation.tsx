import { useContext, useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { NavItems } from '../../utils/constants';
import { NavItem, NavMenu, NavText } from './Navigation.styled';
import TEXTNODES from '../../constants/textConstants';
import { INavigationProps } from './Navigation.types';
import { useAppDispatch } from '../../redux/hooks';
import { setLogOut } from '../../redux/auth/authSlice';
import ThemeContext from '../../utils/Context';

export default function Navigation({ type, toggleOpen }: INavigationProps) {
  const [activeLink, setActiveLink] = useState(TEXTNODES.HOME);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  const handleClick = (link: string) => {
    setActiveLink(link);
    toggleOpen();
  };

  const handleLogout = (link: string) => {
    setActiveLink(link);
    dispatch(setLogOut());
  };

  return (
    <NavMenu type={type} theme={theme === 'dark'}>
      {NavItems.map((navItem) => {
        const Component = navItem[0];
        return (
          <NavItem key={navItem[1]} to={navItem[2]} onClick={() => handleClick(navItem[1])} active={navItem[1] === activeLink ? 'true' : 'false'}>
            <Component />
            <NavText>{navItem[1]}</NavText>
          </NavItem>
        );
      })}
      <NavItem to="/" onClick={() => handleLogout(TEXTNODES.LOG_OUT)} active={TEXTNODES.LOG_OUT === activeLink ? 'true' : 'false'}>
        <RiLogoutCircleLine />
        <NavText>{TEXTNODES.LOG_OUT}</NavText>
      </NavItem>
    </NavMenu>
  );
}
