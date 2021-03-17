import React, { Component } from "react";
import { View, Text, Button } from "react-native";

interface ModelScreenProps {
  navigation: any;
}

export default class ModalScreen extends Component<ModelScreenProps, {}> {
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
