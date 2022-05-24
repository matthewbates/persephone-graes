import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const defaultCenter = {
  lat: 38.8576,
  lng: -104.9128,
};

export default function GoogleMaps() {
  <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
    <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
      {locations.map((item) => {
        return (
          <Marker
            key={item.name}
            position={item.location}
            currentPostition={currentPosition}
            onClick={() => onSelect(item)}
            icon={item.dot}
          />
        );
      })}
    </GoogleMap>
  </LoadScript>;
}
