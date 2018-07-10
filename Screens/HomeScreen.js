/**
 * Created by Merc on 2018-07-08.
 */
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.logo} resizeMode={'contain'} source={require('../assets/images/logo.png')}></Image>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Count')} title="Count">
          <Text>Count</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('About')} title="About">
          <Text>About</Text>
        </TouchableOpacity>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffef42',
    flex:1, justifyContent: 'center', alignItems: 'center',
  },
  button: {
    marginTop: 30,
  },
  logo: {
    width: wp('70%'),
    height: hp('40%')
  },
  text: {
    fontWeight: 'bold',
    color: 'orange'
  }

});
