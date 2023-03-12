import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicRoute } from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivatRoute/PrivatRoute';

const ContactsPage = lazy(() => import('../Pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));
const StartPage = lazy(() => import('../Pages/StartPage/StartPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
