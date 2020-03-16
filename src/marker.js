const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  let markerIcon;
  switch (type) {
    case 'hotel':
      markerIcon = iconURLs.hotels;
    case 'restaurant':
      markerIcon = iconURLs.restaurants;
    case 'activity':
      markerIcon = iconURLs.activities;
  }
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerIcon})`;
  const marker = new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
  return marker;
};

module.exports = buildMarker;
