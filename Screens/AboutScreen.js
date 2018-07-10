/**
 * Created by Merc on 2018-07-08.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#ffef42',
    },
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={{marginVertical: 20}}>Nimmt100 Version 0.2</Text>
        <Text>Hajeh Productions 2018. All Rights Reserved</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#ffef42',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

