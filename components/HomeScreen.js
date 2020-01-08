import React from "react";
import { View, Text, Button, Image } from "react-native";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("./images/ENSC.jpg")}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // Init counter to 0
    this.state = { count: 0 };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Info"
          color="#fff"
        />
      ),
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
          color="#fff"
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
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
              otherParam: "anything you want here"
            });
          }}
        />
      </View>
    );
  }
}
