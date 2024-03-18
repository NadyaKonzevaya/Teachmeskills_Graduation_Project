import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { getIsLoggedInSelector } from '../../redux/selectors';
import IAuthRoute from './AuthRoute.types';

export default function AuthRoute({ component: Component, redirectTo = '/', isPrivate = false }: IAuthRoute) {
  const isLoggedIn = useAppSelector(getIsLoggedInSelector);

  let content;
  if (isPrivate) {
    content = isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
  } else {
    content = isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
  }

  return content;
}
