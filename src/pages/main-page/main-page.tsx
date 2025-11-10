import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, OffersList, CitiesList, Map } from '../../components';
import { user, CITIES } from '../../const' ;
import { Helmet } from 'react-helmet-async';
import { State } from '../../types/state';
import { setCity } from '../../store/action';

function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const dispatch = useDispatch();
  const city = useSelector((state: State) => state.city);
  const allOffers = useSelector((state: State) => state.offers);
  const offers = allOffers.filter((offer) => offer.city.name === city);
  const offersCount = offers.length;

  const handleCityClick = (selectedCity: string) => {
    dispatch(setCity(selectedCity));
  };

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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={offers} onOfferHover={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map' offers={offers} activeOfferId={activeOfferId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
