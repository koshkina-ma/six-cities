import { Header, OffersList, CitiesList } from '../../components';
import { user, CITIES } from '../../const' ;
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types';

type MainPageProps = {
  offersCount: number;
  getOffers: () => OfferType[];
  }

function MainPage({ offersCount, getOffers }: MainPageProps): JSX.Element {
  const offers = getOffers();
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
          activeCity={CITIES[0]}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
              <OffersList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
