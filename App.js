import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import JoinGameScreen from './screens/JoinGameScreen'
import io from 'socket.io-client'

const socket = io('https://blobber-native.herokuapp.com/')
// const socket = io('http://10.0.2.2:3030')
// const socket = io('http://localhost:3030')

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    JoinGame: { screen: JoinGameScreen }
  },
  {
    initialRouteName: 'Home'
  }
)

const App = createAppContainer(MainNavigator)

export default App
