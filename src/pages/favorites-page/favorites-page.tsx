import { FavoritesEmpty, Header, OfferCard } from '../../components';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/main/main-selectors';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers) ?? [];
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  const isEmpty = favoriteOffers.length === 0;

  return (
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header/>

      {isEmpty ? (
        <FavoritesEmpty />
      ) : (
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
                          <OfferCard key={offer.id} offer={offer} />
                        ))}

                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

export default FavoritesPage;
