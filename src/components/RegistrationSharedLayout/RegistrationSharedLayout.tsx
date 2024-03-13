import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Background, Logo, CopyRight } from './RegistrationSharedLayout.styled';
import logo from '../../images/logo.png';
import TEXTNODES from '../../constants/textConstants';

function RegistrationSharedLauout() {
  return (
    <Background>
      <Logo src={logo} alt="logo" />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <CopyRight>
        &#169;
        {TEXTNODES.RIGHTS}
      </CopyRight>
    </Background>
  );
}

export default RegistrationSharedLauout;
