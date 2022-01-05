import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View styles={{ backgroundColor: 'lightgreen' }}>
        <Text style={{ fontSize: 30, fontFamily: 'cursive', marginBottom: 20 }}>
          Weather at Some Places🌡
        </Text>

        <TouchableOpacity
          style={[style.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={style.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={style.text}>
          New Delhi: 14°C, humidity 71%, smoke (11:00)
        </Text>
        <Text style={style.text}>
          Kolkata: 21°C, humidity 57%, smoke (11:00)
        </Text>
        <Text style={style.text}>
          Ahmedabad : 21°C, humidity 21%, clear (11:00)
        </Text>
        <Text style={style.text}>
          Bengaluru: 25°C, humidity 24%, cloudy (11:00)
        </Text>
        <Text style={style.text}>
          Bhopal : 18°C, humidity 36%, wind (11:00)
        </Text>
        <Text style={style.text}>
          Chennai: 29°C, humidity 56%, cloudy (11:00)
        </Text>
        <Text style={style.text}>
          Hyderabad : 28°C, humidity 35%, clear (11:00)
        </Text>
        <Text style={style.text}>
          Jaipur : 17°C, humidity 28%, clear (11:00)
        </Text>
        <Text style={style.text}>
          Lucknow : 16°C, humidity 59%, smoke (11:00)
        </Text>
        <Text style={style.text}>
          Mumbai : 24°C, humidity 46%, partly (11:00)
        </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
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
  text: {
    fontFamily: 'Brush Script MT',
    fontStyle: 'Bold',
    fontSize: 23,
    marginBottom: 50,
  },
});
