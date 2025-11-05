import { useRef } from 'react';
import { OfferType } from '../../types';
import { useMap } from '../../hooks';

type MapProps = {
  offers: OfferType[];
};

function Map({ offers }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef, offers);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
