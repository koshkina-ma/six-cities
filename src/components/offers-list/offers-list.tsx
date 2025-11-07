import { OfferType } from '../../types';
import { OfferCard } from '../../components';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferType[];
   onOfferHover: (id: string | null) => void;
};

function OffersList({ offers, onOfferHover }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => {
            setActiveOfferId(offer.id);
            onOfferHover(offer.id);
          }}
          onMouseLeave={() => {
            setActiveOfferId(null);
            onOfferHover(null);
          }}
          className={activeOfferId === offer.id ? 'active' : ''} //TODO проверить, нужен ли такой класс, или это фантази жэпете
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
}

export default OffersList;
