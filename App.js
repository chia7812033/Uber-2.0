import EatsScreen from "./screens/EatsScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='EatsScreen'
              component={EatsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
