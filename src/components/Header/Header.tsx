import logoBlack from '../../images/logo_black.png';
import {
  HeaderWrapper, SearchBar, LogoBlack, BsFilterRightElement, SearchBarWrap,
} from './Header.styled';
import { UserMenu } from '../UserMenu';

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoBlack src={logoBlack} alt="logo" />
      <SearchBarWrap>
        <SearchBar placeholder="Search" />
        <BsFilterRightElement />
      </SearchBarWrap>
      <UserMenu />
    </HeaderWrapper>
  );
}
