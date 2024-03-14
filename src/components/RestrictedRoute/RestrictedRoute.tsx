import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { getIsLoggedInSelector } from '../../redux/selectors';
import IRestrictedRoute from './RestrictedRoute.types';

export default function RestrictedRoute({ component: Component, redirectTo = '/' }: IRestrictedRoute) {
  const isLoggedIn = useAppSelector(getIsLoggedInSelector);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
