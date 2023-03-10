import { Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@rneui/themed";
import React from "react";
import { selectOrigin } from "../features/navSlice";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const NavOption = ({ id, title, image, screen }) => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
      onPress={() => {
        navigation.navigate(`${screen}`);
      }}
    >
      <View style={tw`${!origin && "opacity-20"}`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={{ uri: image }}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
        <Icon
          style={tw`py-2 rounded-full w-10 mt-4 bg-black`}
          name='arrowright'
          color='white'
          type='antdesign'
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavOption;
