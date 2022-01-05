import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>📰NewsLetter📰</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'blue',
    fontSize: 36,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
