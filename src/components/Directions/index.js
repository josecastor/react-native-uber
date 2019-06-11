import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyBvuIhN3kpV1TXCaaQDO_zXAiQmA3kt_9M'
        strokeWidth={3}
        strokeColor='#222'
    />
);

export default Directions;
