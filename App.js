import React, { Component } from 'react';
import { Alert, ScrollView, Image, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View }  from 'react-native';

export default class PizzaTranslator extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>If you like</Text> 
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Text style={{fontSize:96}}>What's the best</Text>       
          <Text style={{fontSize:96}}>Framework around?</Text>         
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})