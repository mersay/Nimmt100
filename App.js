
import React from 'react'
import {createStackNavigator} from 'react-navigation'

import HomeScreen from './Screens/HomeScreen'
import CountScreen from './Screens/CountScreen'
import AboutScreen from './Screens/AboutScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Count: CountScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}