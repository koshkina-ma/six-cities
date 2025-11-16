import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import { MainPage, FavoritesPage, LoginPage, NotFoundPage, OfferPage } from '../../pages';
import PrivateRoute from '../private-route/private-route';
import { fetchOffersAction } from '../../store/api-actions';
import { getOffers } from '../../store/selectors';
import { mockComments } from '../../mocks/comments';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const comments = mockComments;

  useEffect(() => {
    dispatch(fetchOffersAction ());
  }, [dispatch]);

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
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth} //TODO Auth или NoAuth
              >
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                comments={comments}
                nearOffers={offers.slice(0, 3)} //TODO в ближайшие берет тупо 3 первых из моков
              />
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


