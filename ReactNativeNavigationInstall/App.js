import { Navigation } from 'react-native-navigation';

// 네비게이션 컴포넌트 등록
Navigation.registerComponent('example.TestScreen', () => TestScreen);

// 샘플 컴포넌트
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});
class TestScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
      </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
      </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.TestScreen', // this is a registered name for a screen
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.TestScreen',
      title: 'Screen Two'
    },
    {
      label: 'Three',
      screen: 'example.TestScreen',
      title: 'Screen Three'
    },
    {
      label: 'Four',
      screen: 'example.TestScreen',
      title: 'Screen Four'
    }
  ]
});