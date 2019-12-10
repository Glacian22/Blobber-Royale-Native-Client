import React from "react";
import {Button, View, Text} from "react-native";
class JoinGameScreen extends React.Component {

  static navigationOptions = {
    title: 'Join a Game',
  };
  
  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params.message)
    return(
      <View>
        <Text>
          {this.props.navigation.state.params.message}
        </Text>
        <Button
          title='Join Game!'
          onPress={() => navigate('Home')}
        />
      </View>
    )
  }
}

export default JoinGameScreen