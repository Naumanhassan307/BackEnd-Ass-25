//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ShowStyles from './ShowStyle';

// create a component
const Show = () => {
  return (
    <ImageBackground
      source={require('../../asset/18.jpg')}
      // width="100"
      style={ShowStyles.bgimg}>
      <View style={ShowStyles.container}>
        <View style={ShowStyles.div}>
          <Text>Student Name</Text>
        </View>
        <View style={ShowStyles.div}>
          <Text>Student Roll#</Text>
        </View>
        <View style={ShowStyles.div}></View>
        <TouchableOpacity
          style={{
            width: '40%',
            height: 35,
            borderWidth: 1,
            borderColor: '#800000',
            borderRadius: 40,
            backgroundColor: '#800000',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 18,
              padding: 4,
            }}>
            ADD STUDENT
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

//make this component available to the app
export default Show;
