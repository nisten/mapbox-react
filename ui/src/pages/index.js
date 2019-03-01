import React from 'react'
import { withSiteData } from 'react-static'
import StaticMap from 'react-map-gl'

const accessToken = "pk.eyJ1IjoibmlzdGVuIiwiYSI6ImNqcnlieXd0MjB3bjk0M25yb280Nm9kczQifQ.N3Fa7L770MHqp-AV3f9hoA";
const mapColor = "mapbox://styles/mapbox/streets-v11";

const Map = StaticMap({
  accessToken
});

const mapStyle = {
  height: '700px',
  width: '850px',
};

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to React-Static</h1>
    
    <Map
        style={mapColor}
        containerStyle={mapStyle} 
        latitude={-79.3904}
        longitude={43.7221}
        zoom={2} />
  </div>
  
))
