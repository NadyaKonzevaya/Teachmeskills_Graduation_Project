import { Outlet } from 'react-router-dom';

import { Background, Logo, CopyRight } from './RegistrationSharedLayout.styled';
import logo from '../../images/logo.png';

function RegistrationSharedLauout() {
  return (
    <Background>
      <Logo src={logo} alt="logo" />
      <Outlet />
      <CopyRight>&#169; All Rights Reserved</CopyRight>
    </Background>
  );
}

export default RegistrationSharedLauout;
