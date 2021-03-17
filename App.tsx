import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen, { LogoTitle } from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import ModalScreen from "./components/ModalScreen";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="MyModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen></RootStackScreen>
    </NavigationContainer>
  );
}
