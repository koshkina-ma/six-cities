import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Header, OffersList, CitiesList, Map, SortOptions, Spinner, ErrorMessage } from '../../components';
import { user, CITIES, SORT_TYPES } from '../../const' ;
import { Helmet } from 'react-helmet-async';
import { setCity } from '../../store/action';
import { getCity, getOffersByCity } from '../../store/selectors';
import { sortOffers } from '../../utils';

function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [sortType, setSortType] = useState(SORT_TYPES.POPULAR);

  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffersByCity);
  const offersCount = offers.length;

  const sortedOffers = sortOffers(offers, sortType);

  const handleCityClick = (selectedCity: string) => {
    dispatch(setCity(selectedCity));
  };

  const isLoading = useAppSelector((state) => state.isLoading);
  const error = useAppSelector((state) => state.error);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header
        isLoggedIn={user.isLoggedIn}
        email={user.email}
        favoriteCount={user.favoriteCount}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={CITIES}
          activeCity={city}
          onCityClick={handleCityClick}
        />
        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {city}</b>
                <SortOptions value={sortType} onChange={setSortType} />
                <OffersList offers={sortedOffers} onOfferHover={setActiveOfferId}/>
              </section>
              <div className="cities__right-section">
                <Map className='cities__map' offers={offers} activeOfferId={activeOfferId}/>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
