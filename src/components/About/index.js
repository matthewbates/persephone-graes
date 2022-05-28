import React, { useState } from "react";
import {
  GoogleStyles,
  AboutHeader,
  AboutInfoText,
  AboutNumber,
} from "./AboutElements";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  height: "50vw",
  width: "50%",
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
      <AboutHeader>Located in the Historic Barker House</AboutHeader>
      <AboutInfoText>819 Manitou Ave., Manitou Springs, CO</AboutInfoText>
      <AboutNumber>
        <a href="tel:PHONE_NUM">(719) 234-2467</a>
      </AboutNumber>
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
          </GoogleMap>
        </LoadScript>
      </GoogleStyles>
    </>
  );
}
