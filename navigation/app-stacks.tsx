import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen, { LogoTitle } from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ModalScreen from "../screens/ModalScreen";

// Define route names and associated params
// undefined = no params passed to route
export type RootStackParamList = {
  Main: undefined;
  MyModal: undefined;
  Home: undefined;
  // otherParam is optional
  Details: { itemId: number; otherParam?: string };
};

// Define main view stack: home screen and details screen
const MainStack = createStackNavigator<RootStackParamList>();
const MainStackScreen = () => {
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
};

// Define root view stack: main view stack + modal screen
const RootStack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  route: RouteProp<RootStackParamList, "Details">;
}

export interface ModalScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "MyModal">;
}
