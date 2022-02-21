import React from "react";

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBnh6b98rEM-o-jZ5IsJsqWW23k_DCRNnQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 28.177810, lng: 76.8697953}}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 28.177810, lng: 76.8697953}} />
    )}
  </GoogleMap>
));

export default Map