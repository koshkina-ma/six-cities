import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef: React.RefObject<HTMLDivElement>) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const leafletMap = leaflet.map(mapRef.current, {
        center: [0, 0],
        zoom: 1,
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

      requestAnimationFrame(() => leafletMap.invalidateSize());

      const handleResize = () => leafletMap.invalidateSize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        leafletMap.remove();
        isRenderedRef.current = false;
      };
    }
  }, [mapRef]);

  return map;
}

export default useMap;

