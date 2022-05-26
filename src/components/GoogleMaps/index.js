import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  location: "819 Manitou Ave. Manitou Springs, CO 80829",
  lat: 38.8576,
  lng: -104.9128,
};

const locations = [
  {
    name: "Persephone Grae's",
    location: {
      lat: 38.8576,
      lng: -104.9128,
    },
  },
];

export default function GoogleMaps() {
  <LoadScript googleMapsApiKey="AIzaSyALOtOkU0ZXbOvklXv4EkwjEHU7VYJR9fw">
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
      {locations.map((location, index) => {
        return <Marker key={index} position={location.location} />;
      })}
    </GoogleMap>
  </LoadScript>;
}
