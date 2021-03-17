import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// Define route names and associated params
// undefined = no params passed to route
export type RootStackParamList = {
  Main: undefined;
  MyModal: undefined;
  Home: undefined;
  // otherParam is optional
  Details: { itemId: number; otherParam?: string };
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
