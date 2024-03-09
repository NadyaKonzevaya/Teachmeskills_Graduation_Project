import { Outlet } from 'react-router-dom';

import { Background, Logo, CopyRight } from './RegistrationSharedLayout.styled';
import logo from '../../images/logo.png';
import TEXTNODES from '../../constants/textConstants';

function RegistrationSharedLauout() {
  return (
    <Background>
      <Logo src={logo} alt="logo" />
      <Outlet />
      <CopyRight>
        &#169;
        {TEXTNODES.RIGHTS}
      </CopyRight>
    </Background>
  );
}

export default RegistrationSharedLauout;
