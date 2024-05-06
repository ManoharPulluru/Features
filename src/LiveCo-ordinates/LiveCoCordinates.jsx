import React, { useState, useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import "./LiveCoCordinates.css";

const LiveCoCordinates = () => {
    const [coordinates, setCoordinates] = useState(null);
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });

    useEffect(() => {
        let intervalId;
        if (isGeolocationAvailable && isGeolocationEnabled) {
            intervalId = setInterval(() => {
                console.log('Coordinates:', coords); // Log coords
                setCoordinates({
                    latitude: coords ? coords.latitude : null,
                    longitude: coords ? coords.longitude : null
                });
            }, 1000); // Update every 1 second
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

    return (
        <div className='LiveCoCordinatesMain'>
            {!isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : coordinates ? (
                <table>
                    <tbody>
                        <tr>
                            <td>latitude</td>
                            <td>{coordinates.latitude}</td>
                        </tr>
                        <tr>
                            <td>longitude</td>
                            <td>{coordinates.longitude}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div>Getting the location data&hellip;</div>
            )}
        </div>
    );
};

export default LiveCoCordinates;
