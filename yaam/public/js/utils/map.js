Object.assign(frappe.utils, {
    map_defaults: {
        center: [45, 3],  // [lat, lon]
        zoom: 13,
        // tiles: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        tiles: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGludXhpcGhvIiwiYSI6ImNrY3ZwdTMzNjA2bW4ydHF1Z3drYXdyN2gifQ.MqFlNg-0nh9Pbh6upDueEw',
        options: {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        },
        image_path: "/assets/frappe/images/leaflet/",
    }
})