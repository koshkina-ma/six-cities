type CitiesListProps = {
  cities: string[];
  activeCity: string;
  onCityClick?: (city: string) => void;
};

function CitiesList({ cities, activeCity, onCityClick }: CitiesListProps): JSX.Element {
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
                onClick={() => onCityClick?.(city)}
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
