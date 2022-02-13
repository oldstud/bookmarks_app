import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { RouteI } from '../../interface/route.intrface'

export const PrivateRoute:React.FC<RouteI> = (props) =>  {
  let {
     children,
     redirectTo = '/',
  } = props;

  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} /> ;
}
