import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { RouteI } from '../../interface/route.intrface'

export const PublicRoute:React.FC<RouteI> = (props) => {
    let {
        children,
        restricted = false,
        redirectTo = '/',  
      } = props;
      
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isShouldRedirect = isLoggedIn && restricted;

  return isShouldRedirect ? <Navigate to={redirectTo} /> : children ;
}