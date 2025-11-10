import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import { MainPage, FavoritesPage, LoginPage, NotFoundPage, OfferPage } from '../../pages';
import PrivateRoute from '../private-route/private-route';
import { setOffers } from '../../store/action';
import { mockOffers } from '../../mocks/offers';
import { mockComments } from '../../mocks/comments';

const offers = mockOffers;
const comments = mockComments;

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(offers));
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


