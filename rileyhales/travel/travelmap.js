var map = L.map('map', {
    zoom: 3,
    minZoom: 1.25,
    boxZoom: true,
    maxBounds: L.latLngBounds(L.latLng(-100.0,-270.0), L.latLng(100.0, 270.0)),
    center: [20, 0],
    });

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var Esri_Imagery_Labels = L.esri.basemapLayer('ImageryLabels');

basemaps = {"Basemap": L.layerGroup([Esri_WorldImagery, Esri_Imagery_Labels]).addTo(map)};

    drcap2019 = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "27 Charcos"},
                "geometry": {
                    "coordinates": [-70.819213, 19.734485],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Hatillo"},
                "geometry": {
                    "coordinates": [-70.201398, 19.030929],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "COE"},
                "geometry": {
                    "coordinates": [-69.923653, 18.488675],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Park by Temple"},
                "geometry": {
                    "coordinates": [-69.918357, 18.466926],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Santo Domingo Temple and MTC"},
                "geometry": {
                    "coordinates": [-69.917135, 18.466622],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "INDRHI"},
                "geometry": {
                    "coordinates": [-69.926256, 18.450202],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Jardines del Teatro"},
                "geometry": {
                    "coordinates": [-69.910303, 18.469293],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Food Truck Place"},
                "geometry": {
                    "coordinates": [-69.905779, 18.468840],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "El Conuco Restaurant"},
                "geometry": {
                    "coordinates": [-69.900948, 18.465057],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Cathedral Santa Maria La Menor"},
                "geometry": {
                    "coordinates": [-69.883879, 18.473259],
                    "type": "Point",
                    },
                },

            {
                "type": "Feature",
                "properties": {"name": "Melia Caribe Resort"},
                "geometry": {
                    "coordinates": [-68.415120, 18.672043],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Ft Lauderdale Int Airport"},
                "geometry": {
                    "coordinates": [-80.145223, 26.071527],
                    "type": "Point",
                    },
                },
            ],
        }
    byu = {}
    mission_firenze = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Frankfurt Airport"},
                "geometry": {
                    "coordinates": [8.562096, 50.037503],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Appartamento a Firenze"},
                "geometry": {
                    "coordinates": [11.269319, 43.780531],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Duomo di Firenze - Florence Cathedral"},
                "geometry": {
                    "coordinates": [11.256463, 43.773197],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Chiesa - Church"},
                "geometry": {
                    "coordinates": [11.223759, 43.799389],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Other Missionary's Apartment"},
                "geometry": {
                    "coordinates": [11.248708, 43.781425],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Cento Poveri - Restaurant"},
                "geometry": {
                    "coordinates": [11.247382, 43.773177],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Piazzale Michelangelo"},
                "geometry": {
                    "coordinates": [11.265078, 43.762978],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Outdoor Market"},
                "geometry": {
                    "coordinates": [11.253623, 43.775495],
                    "type": "Point",
                    },
                },
            ],
        }
    mission_genova = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Appartamento a Genova"},
                "geometry": {
                    "coordinates": [0, 0],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "San Fruttuoso"},
                "geometry": {
                    "coordinates": [0, 0],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Casa di Robbie"},
                "geometry": {
                    "coordinates": [0, 0],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Duomo di Genova - Genoa Cathedral"},
                "geometry": {
                    "coordinates": [0, 0],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Chiesa - Church"},
                "geometry": {
                    "coordinates": [0, 0],
                    "type": "Point",
                    },
                },
            ],
        }
    mission_ancona = {}
    mission_milan = {}
    growingup = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Stake Center"},
                "geometry": {
                    "coordinates": [-111.714242, 33.372623],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "High School"},
                "geometry": {
                    "coordinates": [-111.714242, 33.372623],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Childhood neighborhood"},
                "geometry": {
                    "coordinates": [-111.714242, 33.372623],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Gilbert AZ Temple"},
                "geometry": {
                    "coordinates": [-111.737325, 33.291224],
                    "type": "Point",
                    },
                },
            {
                "type": "Feature",
                "properties": {"name": "Mesa AZ Temple"},
                "geometry": {
                    "coordinates": [-111.819668, 33.412670],
                    "type": "Point",
                    },
                },
            ],
        }

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(feature.properties.name);
    }
}

drcap2019_layer = L.geoJSON(drcap2019, {onEachFeature: onEachFeature}).addTo(map),
// byu_layer = L.geoJSON(byu, {onEachFeature: onEachFeature}).addTo(map),
mission_firenze_layer = L.geoJSON(mission_firenze, {onEachFeature: onEachFeature});
// mission_genova_layer = L.geoJSON(mission_genova, {onEachFeature: onEachFeature});
// mission_ancona_layer = L.geoJSON(mission_ancona, {onEachFeature: onEachFeature});
// mission_milan_layer = L.geoJSON(mission_milan, {onEachFeature: onEachFeature});
mission = L.layerGroup([mission_firenze_layer]).addTo(map);
growingup_layer = L.geoJSON(growingup, {onEachFeature: onEachFeature}).addTo(map);


trips = {
    "DR Capstone 2019": drcap2019_layer,
    // "School at BYU": byu_layer,
    "Mission": mission,
    "Childhood": growingup_layer,
    }

lyrControls = L.control.layers(basemaps, trips).addTo(map);