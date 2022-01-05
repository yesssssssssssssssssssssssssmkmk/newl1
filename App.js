import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import JokeScreen from './screens/JokeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import AppHeader from './components/AppHeader';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'lightgreen' }}>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  HoroscopeScreen: HoroscopeScreen,
  JokeScreen: JokeScreen,
  NewsScreen: NewsScreen,
  WeatherScreen: WeatherScreen,
});
var AppContainer = createAppContainer(AppNavigator);