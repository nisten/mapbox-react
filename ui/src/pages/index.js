import React from 'react'
import { withSiteData } from 'react-static'
import Form from '../containers/Form.js'

const mapToken = 'pk.eyJ1IjoibmlzdGVuIiwiYSI6ImNqcnlieXd0MjB3bjk0M25yb280Nm9kczQifQ.N3Fa7L770MHqp-AV3f9hoA'
const ipCoordinates = '-79.3623,43.6776'


export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>IP Locator with static rendering</h1>
    <Form />
    <img src={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${ipCoordinates},10,0,30/600x600@2x?access_token=${mapToken}`} />
  </div>
))
