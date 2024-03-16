import { useState } from 'react';
import { NavItems } from '../../utils/constants';
import { NavItem, NavMenu, NavText } from './Navigation.styled';
import TEXTNODES from '../../constants/textConstants';
import { INavigationProps } from './Navigation.types';

export default function Navigation({ type, toggleOpen }: INavigationProps) {
  const [activeLink, setActiveLink] = useState(TEXTNODES.HOME);

  const handleClick = (link: string) => {
    setActiveLink(link);
    toggleOpen();
  };

  return (
    <NavMenu type={type}>
      {NavItems.map((navItem) => {
        const Component = navItem[0];
        return (
          <NavItem key={navItem[1]} to={navItem[2]} onClick={() => handleClick(navItem[1])} active={navItem[1] === activeLink ? 'true' : 'false'}>
            <Component />
            <NavText>{navItem[1]}</NavText>
          </NavItem>
        );
      })}
    </NavMenu>
  );
}
