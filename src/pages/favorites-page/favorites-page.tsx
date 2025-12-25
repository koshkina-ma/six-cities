import { FavoritesEmpty, Header, OfferCard, Spinner } from '../../components';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { OfferType } from '../../types';
import { getFavoriteCount } from '../../store/user/user-selectors';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteCount = useAppSelector(getFavoriteCount);

  const [favoriteOffers, setFavoriteOffers] = useState<OfferType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  const isEmpty = !isLoading && favoriteOffers.length === 0;

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setIsLoading(true);
      try {
        const data = await dispatch(fetchFavoriteOffersAction()).unwrap();
        if (isMounted) {
          setFavoriteOffers(data);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, [dispatch, favoriteCount]);

  let content: JSX.Element;
  if (isLoading) {
    content = <Spinner />;
  } else if (isEmpty) {
    content = <FavoritesEmpty />;
  } else {
    content = (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers
                      .filter((offer) => offer.city.name === city)
                      .map((offer) => (
                        <OfferCard key={offer.id} offer={offer} className="favorites__card" />
                      ))}

                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    );
  }

  return (
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header/>

      {content}

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
