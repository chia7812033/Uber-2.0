import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc'

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-red-500 flex-1`}>
      <Text style={tw`text-center`}>RideOptionsCard</Text>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
