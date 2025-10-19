import { OfferType } from '../../types';
import { OfferCard } from '../../components';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferType[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
          className={activeOfferId === offer.id ? 'active' : ''}//TODO добавление класса только для линтера, чтобы не ругался
          //когда буду использовать эту const где-то еще, можно будет снести эту строчку
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
}

export default OffersList;
