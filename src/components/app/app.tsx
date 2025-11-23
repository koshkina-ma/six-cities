import { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import { MainPage, FavoritesPage, LoginPage, NotFoundPage, OfferPage } from '../../pages';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../components';
import { toast } from 'react-toastify';


function App(): JSX.Element {
  const error = useAppSelector((state) => state.error);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Spinner /> //TODO странное место для спинера
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage />
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;


