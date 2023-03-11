import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { selectDestination, selectOrigin } from "../features/navSlice";

import { GOOGLE_API } from "@env";
import MapViewDirections from "react-native-maps-directions";
import tw from "twrnc";
import { useSelector } from "react-redux";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    mapRef.current.fitToCoordinates(
      [
        { latitude: origin.location.lat, longitude: origin.location.lng },
        { latitude: destination.location.lat, longitude: destination.location.lng },
      ],
      {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      }
    );
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin?.location.lat ? origin.location.lat : 0,
        longitude: origin?.location.lng ? origin.location.lng : 40,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title='Origin'
          description={origin.description}
          identifier={'origin'}
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title='Destination'
          description={destination.description}
          identifier={'destination'}
        />
      )}

      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API}
          strokeWidth={3}
        />
      )}
    </MapView>
  );
};

export default Map;
