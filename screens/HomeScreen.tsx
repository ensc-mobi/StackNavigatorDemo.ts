import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";

export class LogoTitle extends Component<{}, {}> {
  render() {
    return (
      <Image
        source={require("../assets/ENSC.jpg")}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

interface HomeScreenState {
  count: number;
}

export default class HomeScreen extends Component<
  HomeScreenProps,
  HomeScreenState
> {
  state: HomeScreenState = { count: 0 };

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Info"
          color="#fff"
        />
      ),
      headerRight: () => (
        <Button onPress={this.increaseCount} title="+1" color="#fff" />
      ),
    });
  }

  increaseCount = () => {
    // Increase counter
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
            });
          }}
        />
      </View>
    );
  }
}
