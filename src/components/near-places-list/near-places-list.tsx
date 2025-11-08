import { OfferType } from '../../types';
import { OfferCard } from '../../components';

type NearPlacesListProps = {
  offers: OfferType[];
};

function NearPlacesList ({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default NearPlacesList;
