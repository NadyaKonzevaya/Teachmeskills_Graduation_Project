import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { getIsLoggedInSelector } from '../../redux/selectors';

interface IRestrictedRoute {
  component: React.FC;
  redirectTo: string;
}

export default function PrivateRoute({ component: Component, redirectTo = '/' }: IRestrictedRoute) {
  const isLoggedIn = useAppSelector(getIsLoggedInSelector);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
}
