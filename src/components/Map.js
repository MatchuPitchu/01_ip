import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// 1. Version for custom marker
// import L from 'leaflet';
// import marker from '../assets/Icon geo-fill Bootstrap.svg';
// 2. Version for custom marker
import { Compass } from 'react-bootstrap-icons';
import Leaflet from "leaflet";
import ReactDOMServer from 'react-dom/server';

const Map = ( {location: {lat, lng, city}}) => {
        
    // 1. Version for custom marker  
    // const myMarker = new L.Icon({
    //     iconUrl: marker,
    //     iconRetinaUrl: marker,
    //     popupAnchor: [-0, -0],
    //     iconSize: [35, 35],
    // });

    // 2. Version for custom marker
    const iconHTML = ReactDOMServer.renderToString(<Compass className="icon" size={"2em"} />)
    const icon = new Leaflet.DivIcon({
      html: iconHTML,
    });

    return (
        <>
            <MapContainer 
                center={[lat, lng]} 
                zoom={13} 
                scrollWheelZoom={false}
                style={{height:'400px', width:'100%'}}
            >
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={icon}>
                    <Popup><b>{city}</b><br />{lat}, {lng}</Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map;
