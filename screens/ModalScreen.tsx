import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { ModalScreenProps } from "../navigation/app-stacks";

export default class ModalScreen extends Component<ModalScreenProps, {}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
