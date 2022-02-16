import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { DetailsScreenProps } from "../navigation/app-stacks";

export default class DetailsScreen extends Component<DetailsScreenProps, {}> {
  render() {
    const { navigation } = this.props;
    const { itemId, otherParam } = this.props.route.params;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ title: "Updated!" })}
        />
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
