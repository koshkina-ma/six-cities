import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { OfferType } from '../types';

function useMap(mapRef: React.RefObject<HTMLDivElement>, offers: OfferType[]) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && offers.length > 0) {
      const cityLocation = offers[0].city.location;

      const leafletMap = leaflet.map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        zoom: cityLocation.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(leafletMap);

      setMap(leafletMap);
      isRenderedRef.current = true;
    }
  }, [mapRef, offers]);

  return map;
}

export default useMap;

