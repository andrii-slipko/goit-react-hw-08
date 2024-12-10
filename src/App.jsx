import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage'; 
import  PrivateRoute  from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <p>Loading...</p> : <Routes>
<Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
      />
      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
      />
    </Route>
  </Routes>;
};


export default App;