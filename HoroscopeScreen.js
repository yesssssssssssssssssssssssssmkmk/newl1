import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View styles={{ backgroundColor: 'lightgreen' }}>
        <Text style={{ fontSize: 30, fontFamily: 'cursive', marginBottom: 20 }}>
          Horoscope Today 🪐
        </Text>

        <TouchableOpacity
          style={[style.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={style.buttonText}>Back</Text>
        </TouchableOpacity>

        <Text style={style.text}>
          Aries (March 21-April 20): Those in financial doldrums of late will
          find their condition improving. Family is likely to appreciate what
          you are doing for them. Business trips will gain frequency and bring
          better opportunities. Efforts to remain fit will succeed. You may be
          pulling in the wrong direction, so take time off to get your bearings
          right! Those playing the stocks may not be able to recover much of
          what they had previously lost. Lucky Colour: Peach Lucky Alphabet: L
          Friendly Numbers: 4,9,12 Friendly Zodiac Today: Taurus & Libra Be
          careful of: Leo
        </Text>

        <Text style={style.text}>
          *Taurus (April 21-May 20): Some of you can resolve to lead a
          disciplined life for health reasons. You may find spouse extra
          affectionate today. Too much travelling can get a bit tiresome. You
          are likely to become a bundle of energy as you tackle both personal
          and professional fronts admirably. There is a chance of meeting
          someone you wanted to meet for a long time. You will be satisfied with
          what you have managed to achieve on the professional front. Financial
          security is assured, so don’t worry on this account. Lucky Colour:
          Saffron Lucky Alphabet: V Friendly Numbers: 4, 5,3 Friendly Zodiac
          Today: Leo & Scorpio Be careful of: Cancer
        </Text>

        <Text style={style.text}>
          *Gemini (May 21-June 21): Your financial situation is likely to take a
          downward swing, so curb wasteful expenditure. It seems you have bitten
          more than you can chew on the work front. Diet and exercise will prove
          an effective combination in bringing you back in shape. You can feel
          it in your bones that something positive is going to happen. You may
          be helped by someone close in enhancing your career. Staying in touch
          with people on the social front will help you grow your network. Lucky
          Colour: Forest Green Lucky Alphabet: P Friendly Numbers: 1,4,8
          Friendly Zodiac Today: Sagittarius & Virgo Be careful of: Taurus
        </Text>

        <Text style={style.text}>
          *Cancer (June 22-July 22): Eating healthy food and maintaining an
          active lifestyle may become an obsession with you, but is likely to
          benefit you immensely. Some of you can be entrusted with an important
          out of town job. Shifting to a new place is possible. Taking some time
          off for a break will act as a soothing balm to the mind. Becoming a
          yes-man at work can have its advantages, so toe the line of someone
          important and prosper! Your long standing on the work front may
          finally be met. Lucky Colour: Magenta Lucky Alphabet: E Friendly
          Numbers: 9, 18 Friendly Zodiac Today: Gemini & Leo Be careful of:
          Aries
        </Text>

        <Text style={style.text}>
          *Leo (July 23-August 23): Good feedback on the academic front is
          likely to boost your morale and motivate you to put in your best. A
          difficult task can come your way, but you will be able to complete it
          to the satisfaction of all. Financially, you are likely to remain well
          off. You can expect to be the centre of attraction in a social
          gathering. Health remains good. You will get the opportunity to enjoy
          yourself in a new group of friends or colleagues. Your go-getting
          attitude and self-confidence will help in getting you a prestigious
          assignment on the professional front. Lucky Colour: Peach Lucky
          Alphabet: K Friendly Numbers: 8, 18 Friendly Zodiac Today: Leo &
          Scorpio Be careful of: Gemini
        </Text>

        <Text style={style.text}>
          *Virgo (August 24-September 23): Your savings are likely to come in
          good use today. Keep your options open on the travel front. Things go
          smoothly at work and help you finish all pending tasks today. Helpful
          attitude of someone who cares for you will seem most touching. Despite
          distractions, students will manage to keep academics in their focus.
          Negativity can prevail on the family front if you don’t do something
          about it. Socially the day looks inviting as you can be surrounded by
          friends and well-wishers. Lucky Colour: Purple Lucky Alphabet: J
          Friendly Numbers: 5, 9 Friendly Zodiac Today: Pisces & Cancer Be
          careful of: Taurus
        </Text>

        <Text style={style.text}>
          *Libra (September 24-October 23): Someone may keep you waiting today,
          but the wait will be worth it! Those planning to start something new
          are likely to find the day fruitful. A change in diet will be helpful
          in getting trimmer. Business persons will manage to raise the capital
          to start something new. Positive steps to strengthen family ties will
          be lauded by those who are close to you. A property is likely to come
          into your name. Lucky Colour: magenta Lucky Alphabet: G Friendly
          Numbers: 9, 6 Friendly Zodiac Today: Aquarius & Leo Be careful of:
          Virgo
        </Text>
        <Text style={style.text}>
          *Scorpio (October 24-November 22): A journey undertaken for an
          important cause will be successful. Your plan will fall into place and
          help you establish yourself much more firmly at work. A new domestic
          situation will bring positivity in your life. Whatever you invest in
          now, you are likely to get doubled in the near future. You will manage
          to continue your workout schedule and do well on the fitness front.
          People who matter are likely to favour you on the academic front.
          Lucky Colour: Gray Lucky Alphabet: A Friendly Numbers: 4, 8, 12
          Friendly Zodiac Today: Aries & Libra Be careful of: Gemini
        </Text>

        <Text style={style.text}>
          *Sagittarius (November 23-December 21): Those travelling should not
          throw caution to the winds. Your initiatives to bring about a change
          are likely to meet success. Your ideas and suggestions on the
          professional front can come a cropper. Your feelings will be respected
          by others on the home front. A journey may prove most entertaining.
          Property owned by you is likely to give good returns. You may have to
          finish something quickly, as time is running out. Lucky Colour: Peach
          Lucky Alphabet: T Friendly Numbers: 8, 15 Friendly Zodiac Today:
          Scorpio & Leo Be careful of: Taurus
        </Text>

        <Text style={style.text}>
          *Capricorn (December 22-January 21): Financially, you will manage to
          make a good amount on the side. Good opportunities promise to come
          within your reach soon. Buying a luxury item is on the cards for some.
          You will do well to toe the line of those who are genuinely concerned
          about you. Your well-wishers will not leave any stone unturned in
          building your image on the social front. You will remain on firm
          ground regarding an awaited result or verdict, so expect the outcome
          to be favourable. Lucky Colour: Yellow Lucky Alphabet: H Friendly
          Numbers: 1, 4, 13
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
