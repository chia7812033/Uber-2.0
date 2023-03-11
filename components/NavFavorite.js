import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@rneui/themed";
import React from "react";
import tw from "twrnc";

const NavFavorite = ({ id, icon, location, destination }) => {
  return (
    <View key={id}>
      <TouchableOpacity style={tw`flex-row items-center p-5`}>
        <Icon
          style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          name={icon}
          type='ionicon'
          color={"white"}
          size={18}
        />
        <View>
          <Text style={tw`font-semibold text-lg`}>{location}</Text>
          <Text style={tw`text-gray-500`}>{destination}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavFavorite;
