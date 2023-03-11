import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { selectTravelTimeInformation } from "../features/navSlice";
import tw from "twrnc";
import { useSelector } from "react-redux";

const CarCard = ({ id, title, multiplier, image, selected, press }) => {

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <TouchableOpacity
      onPress={press}
      style={tw`px-8 flex-row items-center justify-between ${
        selected ? "bg-gray-200" : ""
      }`}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <View style={tw`-ml-6`}>
        <Text style={tw`text-xl font-semibold`}>{title}</Text>
        <Text>{travelTimeInformation?.duration.text}</Text>
      </View>
      <Text style={tw`text-xl`}>

        {new Intl.NumberFormat('en-gb', {
          style: "currency",
          currency: 'GBP',
        }).format(
          (travelTimeInformation?.duration.value * multiplier) / 100
        )}

      </Text>
    </TouchableOpacity>
  );
};

export default CarCard;
