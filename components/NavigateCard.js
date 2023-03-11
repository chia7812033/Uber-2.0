import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { GOOGLE_API } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "@rneui/themed";
import NavFavorite from "./NavFavorite";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { setDestination } from "../features/navSlice";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl -mt-14`}>Good Morning</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            placeholder='Where To?'
            styles={toInputBoxStyles}
            minLength={2}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            fetchDetails={true}
            onPress={(data, detail = null) => {
              dispatch(
                setDestination({
                  location: detail.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: GOOGLE_API,
              language: "en",
            }}
          />
        </View>
      </View>
      <View style={tw`flex-1`}>
        <NavFavorite
          id='123'
          icon='home'
          location='Home'
          destination={"Code Street, London, UK"}
        />
        <NavFavorite
          id='456'
          icon='briefcase'
          location='Work'
          destination={"Londin Eye, London, UK"}
        />

        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex-row justify-between items-center bg-black w-24 px-4 py-3 rounded-full`}
          >
            <Icon name='car' type='font-awesome' color={"white"} size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row justify-between items-center w-24 px-4 py-3 rounded-full`}
          >
            <Icon
              name='fast-food-outline'
              type='ionicon'
              color={"black"}
              size={16}
            />
            <Text style={tw`text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
