import React, { useState } from "react";
import { GoogleStyles } from "./AboutElements";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "50vh",
  width: "80%",
};

const defaultCenter = {
  location: "819 Manitou Ave. Manitou Springs, CO 80829",
  lat: 38.857672,
  lng: -104.917313,
};

const location = [
  {
    name: "Persephone Grae's",
    location: {
      lat: 38.857672,
      lng: -104.917313,
    },
  },
];

export default function About({ noFooter }) {
  const [selected, setSelected] = useState({});
  noFooter(true);

  return (
    <>
      <GoogleStyles>
        <LoadScript googleMapsApiKey="AIzaSyALOtOkU0ZXbOvklXv4EkwjEHU7VYJR9fw">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={18}
            center={defaultCenter}
          >
            {location.map((e, index) => {
              return <Marker key={index} position={e.location} />;
            })}
            {selected.location && (
              <InfoWindow
                position={selected.location}
                clickable={false}
              ></InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </GoogleStyles>
    </>
  );
}
