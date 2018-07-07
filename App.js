import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, StatusBar, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: false,
      numIsDisabled: Array.from({length: 104}, x => false)
    }
  }

  generate() {
    let nums = []

    for (let i = 0; i < 104; i++) {
      nums.push(i + 1);
    }
    const chunk = (arr, size) => arr.reduce((acc, _ , i) => (i % size) ? acc : [...acc, arr.slice(i, i + size)], [])

    return chunk(nums,10)
  }

  turnOnDarkMode(){ this.setState({isDarkMode: !this.state.isDarkMode})}

  reset() {this.setState({numIsDisabled: Array.from({length: 104}, x => false)})}

  _onPressItem = (num) => {
    this.setState((state) => {
      const selected = state.numIsDisabled
      selected[num] = true
      return {numIsDisabled: selected};
    })
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = (num) => (<TouchableOpacity style={{marginVertical: 10, marginHorizontal:5}}
                                            onPress={()=> this._onPressItem(num)}>
    <Text style={[styles.numberButton,{ color: this.state.numIsDisabled[num]? "grey": (this.state.isDarkMode? "orange" : "#0076FF" )}]}>{num.toString()}</Text>
  </TouchableOpacity>)


  render() {
    let numsArr = this.generate()
    let darkMode = this.state.isDarkMode? styles.grey : []
    return (<ScrollView style={[darkMode]}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={[styles.row, {justifyContent: 'space-between', marginHorizontal: 10, marginTop: hp('5%')}]}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold',color: "orange"}}>Nimmt 100!</Text>
          <Switch title="Dark Mode" value={this.state.isDarkMode} onValueChange={() => this.turnOnDarkMode()}></Switch>
          <Button title="Reset" onPress={() => this.reset()}></Button>
        </View>
        <View style={[styles.margin]}>
          {numsArr.map((row, id) => <FlatList
            key={id}
            data={row}
            style={{marginBottom: 10}}
            ItemSeparatorComponent={ () => <View style={ { width: 5, backgroundColor: 'transparent' } } /> }
            horizontal={true}
            keyExtractor={this._keyExtractor}
            renderItem={(row) => this._renderItem(row["item"])}
          />)}

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  border: {
  },
  grey:{
    backgroundColor: '#212121',
  },
  text: {
    fontSize: hp('20%') ,
  },
  row: {
    flexDirection: 'row'
  },
  margin: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  numberButton: {
    fontSize: hp('3%'),
  }
})