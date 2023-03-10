import MapView, { Marker } from "react-native-maps";
import { Text, View } from "react-native";

import React from "react";
import { selectOrigin } from "../features/navSlice";
import tw from "twrnc";
import { useSelector } from "react-redux";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
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
          title="Origin"
          description={origin.description}
          identifier="origin"

        />
      )}
    </MapView>
  );
};

export default Map;
