import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../page/Home'));
const RegisterPage = lazy(() => import('../page/Register'));
const LoginPage = lazy(() => import('../page/Login'));
const ContactsPage = lazy(() => import('../page/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isCurrent } = useAuth();
  
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isCurrent ? (
    <Loader />
  ) : (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
