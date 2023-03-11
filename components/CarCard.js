import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import tw from "twrnc";

const CarCard = ({ id, title, multiplier, image, selected, press}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={tw`px-8 flex-row items-center justify-between ${selected ? "bg-gray-200" : ""}`}>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, resizeMode: "contain"}}
      />
      <View style={tw`-ml-6`}>
        <Text style={tw`text-xl font-semibold`}>{title}</Text>
        <Text>Travel time...</Text>
      </View>
      <Text style={tw`text-xl`}>{`$${99 * multiplier}`}</Text>
    </TouchableOpacity>
  );
};

export default CarCard;
