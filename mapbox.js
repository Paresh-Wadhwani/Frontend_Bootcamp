mapboxgl.accessToken = 'pk.eyJ1IjoicGFyZXNoLXdhZGh3YW5pIiwiYSI6ImNrcXozZW80ZjB4Y2wyd254ejU4NWc3c2oifQ.QuSmYjuj4HRk84zJ77cRBg';

var map = new mapboxgl.Map
(
	{
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-73.9855, 40.7580],
		zoom: 18,
	}
);
