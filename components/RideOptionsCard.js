import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import CarCard from "./CarCard";
import { Icon } from "@rneui/themed";
import { ScrollView } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <View style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row items-center px-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`p-4 rounded-full`}
        >
          <Icon name='chevron-left' type='font-awesome' size={16} />
        </TouchableOpacity>
        <Text style={tw`text-center py-4 text-xl flex-1 pr-6`}>
          Select a Ride
        </Text>
      </View>

      <ScrollView>
        <CarCard
          key={"Uber-X-123"}
          id={"Uber-X-123"}
          title={"UberX"}
          multiplier={1}
          image='https://links.papareact.com/3pn'
          selected={selected?.id === "Uber-X-123"}
          press={() => setSelected({ id: "Uber-X-123", title: "UberX" })}
        />
        <CarCard
          key={"Uber-XL-456"}
          id={"Uber-XL-456"}
          title={"UberXL"}
          multiplier={1.2}
          image='https://links.papareact.com/5w8'
          selected={selected?.id === "Uber-XL-456"}
          press={() => setSelected({ id: "Uber-XL-456", title: "UberXL" })}
        />
        <CarCard
          key={"Uber-LUX-789"}
          id={"Uber-LUX-789"}
          title={"UberLUX"}
          multiplier={1.5}
          image='https://links.papareact.com/7pf'
          selected={selected?.id === "Uber-LUX-789"}
          press={() => setSelected({ id: "Uber-LUX-789", title: "UberLUX" })}
        />
      </ScrollView>

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-2 ${!selected ? "bg-gray-200" : ""}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;
