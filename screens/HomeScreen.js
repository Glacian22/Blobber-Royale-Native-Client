import React from "react";
import { Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Join Game!"
        onPress={() => navigate('JoinGame', {message: 'Yo buddy, how it goin'})}
      />
    );
  }
}

export default HomeScreen