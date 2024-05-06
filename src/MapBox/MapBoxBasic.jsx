import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapBoxWithUserLocation = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFub2hhcnB1bGx1cnUiLCJhIjoiY2xyeHB2cWl0MWFkcjJpbmFuYXkyOTZzaCJ9.AUGHU42YHgAPtHjDzdhZ7g';

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 14
        });

        new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);

        return () => map.remove();
      });
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100%' }} />
  );
};

export default MapBoxWithUserLocation;
