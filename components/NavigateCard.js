import { StyleSheet, Text, View } from "react-native";

import { GOOGLE_API } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
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
    <SafeAreaView style={tw`bg-white flex-1`}>
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
            }}
            query={{
              key: GOOGLE_API,
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
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
