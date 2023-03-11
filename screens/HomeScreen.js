import { Image, Text, View } from "react-native";
import { setDestination, setOrigin } from "../features/navSlice";

import { GOOGLE_API } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorite from "../components/NavFavorite";
import NavOption from "../components/NavOption";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useDispatch } from "react-redux";

const Homescreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_API,
            language: "en",
          }}
        />

        <View style={tw`flex-row`}>
          <NavOption
            id='123'
            title='Get a ride'
            image='https://links.papareact.com/3pn'
            screen='MapScreen'
          />
          <NavOption
            id='456'
            title='Order food'
            image='https://links.papareact.com/28w'
            screen='EatsScreen'
          />
        </View>

        <View>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
