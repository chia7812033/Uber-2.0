import { Text, View } from "react-native";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import React from "react";
import RideOptionsCard from "../components/RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
