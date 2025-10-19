type CitiesListProps = {
  cities: string[];
  activeCity: string;
};

function CitiesList({ cities, activeCity }: CitiesListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <span
                className={`locations__item-link tabs__item ${
                  city === activeCity ? 'tabs__item--active' : ''
                }`}
              >
                {city}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
