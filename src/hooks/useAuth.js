import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsCurrent,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isCurrent = useSelector(selectIsCurrent);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isCurrent,
    user,
  };
};