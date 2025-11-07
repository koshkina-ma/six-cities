import { useEffect, useRef } from 'react';
import { OfferType } from '../../types';
import { useMap } from '../../hooks';
import leaflet from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

type MapProps = { //TODO city: city; активный оффер?
  offers: OfferType[];
};

function Map({ offers }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, offers);

  useEffect(() => {
    if (map && offers.length > 0) {
      const defaultIcon = leaflet.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });
      leaflet.Marker.prototype.options.icon = defaultIcon;

      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
        leaflet.marker([latitude, longitude]).addTo(map);
      });
    }
  }, [map, offers]); //TODO сюда про активный оффер еще зависимость

  return <section className="cities__map map" ref={mapRef} />;
}


export default Map;
