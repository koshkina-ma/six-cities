import { useEffect, useRef } from 'react';
import { OfferType } from '../../types';
import { useMap } from '../../hooks';
import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className?: string;
  offers: OfferType[];
  activeOfferId?: string | null;
};

function Map({ className, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map && offers.length > 0) {
      const { latitude, longitude, zoom } = offers[0].city.location;
      map.setView([latitude, longitude], zoom);

      const defaultIcon = leaflet.icon({
        iconUrl: URL_MARKER_DEFAULT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const activeIcon = leaflet.icon({
        iconUrl: URL_MARKER_ACTIVE,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const { latitude: offerLat, longitude: offerLng } = offer.location;
        const icon = offer.id === activeOfferId ? activeIcon : defaultIcon;
        leaflet.marker([offerLat, offerLng], { icon, interactive: false }).addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return <section className={`map ${className}`} ref={mapRef} />;
}

export default Map;
