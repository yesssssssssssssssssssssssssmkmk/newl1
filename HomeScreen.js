import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component {
  dislikePressed() {
    var dislikes = db.ref('/');
    dislikes.update({
      dislike: 1,
    });
  }
  likePressed() {
    var likes = db.ref('/');
    likes.update({
      like: 1,
    });
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightblue' }]}
          onPress={() => {
            this.props.navigation.navigate('JokeScreen');
          }}>
          <Text style={styles.buttonText}>Jokes😜</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightblue' }]}
          onPress={() => {
            this.props.navigation.navigate('HoroscopeScreen');
          }}>
          <Text style={styles.buttonText}>Horoscope🪐</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightblue' }]}
          onPress={() => {
            this.props.navigation.navigate('WeatherScreen');
          }}>
          <Text style={styles.buttonText}>Weather ☁</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightblue' }]}
          onPress={() => {
            this.props.navigation.navigate('NewsScreen');
          }}>
          <Text style={styles.buttonText}>Top News📰</Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.buttonText,
            {
              alignSelf: 'center',
              marginTop: 40,
              fontFamily: 'Brush Script MT',
              fontSize: 25,
            },
          ]}>
          Rate Us!
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <TouchableOpacity onPress={this.likePressed}>
            <Image
              style={[styles.image, { marginLeft: 75 }]}
              source={require('../assets/thumbsup.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.dislikePressed}>
            <Image
              style={[styles.image, { marginRight: 75 }]}
              source={require('../assets/thumbsdown.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 50,
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
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 40,
  },
});
