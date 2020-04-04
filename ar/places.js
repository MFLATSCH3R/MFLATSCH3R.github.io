window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: "Grund",
            location: {
                lat: 47.583943,
                lng: 12.564110
            }
        },
        {
            name: 'Elfenwiese',
            location: {
                lat: 47.568744,
                lng: 12.576941
            }
        },
        {
            name: 'Schefferau Kapelle',
            location: {
                lat: 47.576500,
                lng: 12.586034
            }
        },
        {
            name: 'Talsenalm',
            location: {
                lat: 47.570358,
                lng: 12.547877
            }
        },
        {
            name: 'Steinplatte Gipfel',
            location: {
                lat: 47.603764,
                lng: 12.579359
            }
        },
        {
            name: 'Brunnkopf',
            location: {
                lat: 47.559099,
                lng: 12.598570
            }
        },
        {
            name: 'Steinberge',
            location: {
                lat: 47.551633,
                lng: 12.610345
            }
        }
    ];
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', './assets/map-marker.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        };

        icon.addEventListener('click', clickListener);

        scene.appendChild(icon);
    });
}