import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'lightgreen' }}>
        <Text style={{ fontSize: 30, fontFamily: 'cursive', marginBottom: 20 }}>
          Jokes Of The Day😜!
        </Text>

        <TouchableOpacity
          style={[style.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={style.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={style.text}>
          1) A woman gets on a bus with her baby. The driver says “Ugh – that’s
          the ugliest baby I’ve ever seen!” The woman walks to the back of the
          bus and sits down. She says to the man next to her: “The driver just
          insulted me!” The man says: “You go up there and tell him off. Go on.
          I’ll hold your monkey for you.”
        </Text>

        <Text style={style.text}>
          2) Why did the chicken cross the road? Answer:To get to the other
          side.
        </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  text: {
    fontFamily: 'Brush Script MT',
    fontStyle: 'Bold',
    fontSize: 30,
    marginBottom: 50,
  },
  button: {
    alignSelf: 'center',
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
});
