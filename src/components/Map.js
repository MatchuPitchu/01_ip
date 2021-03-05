import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Custom Marker
import L from 'leaflet';
import marker from '../assets/Icon geo-fill Bootstrap.svg';


const Map = ( {location: {lat, lng}}) => {

    const myMarker = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor: [-0, -0],
        iconSize: [35, 35],
    });

    return (
        <>
            <MapContainer style={{height:'400px', width:'100%'}} center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={myMarker}>
                    <Popup>A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map;
