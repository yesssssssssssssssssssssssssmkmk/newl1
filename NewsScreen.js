import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, fontFamily: 'cursive', marginBottom: 20 }}>
          Top News 5 🗞
        </Text>

        <TouchableOpacity
          style={[style.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={style.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={style.text}>
          1) Rakesh Tikait, leader of the Bharat Kisan Union (BKU), on Wednesday
          said that those who created violence during the tractor rally and
          unfurled flags at the Red Fort have to pay for their deeds.
        </Text>
        <Text style={style.text}>
          2) India reported 12,689 new cases of the coronavirus disease
          (Covid-19) in the previous 24 hours, as the national tally rose to
          10,689,527, the Union health ministry’s dashboard showed on Wednesday.
        </Text>
        <Text style={style.text}>
          3) Continuing her tirade against the farmers whom she considers
          "terrorists" and against all those who are supporting the issue of the
          farmers, actor Kangana Ranaut on Wednesday said the protesters hoisted
          "Khalistani flag" on the Red Fort in broad daylight.
        </Text>
        <Text style={style.text}>
          4) A day after a violent clash between protesters and police officials
          broke out in Delhi on Republic Day in which one protester died, the
          Delhi Police on Wednesday beefed up the security at Red Fort where a
          group of farmers hoisted the Khalsa flag.
        </Text>
        <Text style={style.text}>
          5) From January 29 onwards, the number of Mumbai local trains in
          operation will return to its pre-Covid figures, but the services will
          be limited to only those who have been allowed to travel by the
          suburban railways during various phases of unlocking.
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
    fontSize: 25,
    marginBottom: 50,
  },
});
