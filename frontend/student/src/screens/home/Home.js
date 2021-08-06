//import liraries
import React, {Component} from 'react';
import {View, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

import HomeStyles from './HomeStyle';

// create a component
const Home = () => {
  return (
    <ImageBackground
      source={require('../../asset/18.jpg')}
      // width="100"
      style={HomeStyles.bgimg}>
      <View style={HomeStyles.container}>
        <View style={HomeStyles.div}>
          <TextInput
            placeholder="Student Name"
            placeholderTextColor="#800000"
            style={{
              width: '80%',
              height: 45,
              borderWidth: 1,
              borderColor: '#800000',
              borderRadius: 40,
              paddingLeft: 20,
              color: '#800000',
              fontSize: 18,
              //   marginLeft:10,
            }}
          />
        </View>
        <View style={HomeStyles.div}>
          <TextInput
            placeholder="Student Roll#"
            placeholderTextColor="#800000"
            style={{
              width: '80%',
              height: 45,
              borderWidth: 1,
              borderColor: '#800000',
              borderRadius: 40,
              paddingLeft: 20,
              color: '#800000',
              fontSize: 18,
              //   marginLeft:10,
            }}
          />
        </View>
        <View style={HomeStyles.div}>
          <TouchableOpacity
            style={{
              width: '30%',
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
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
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
            SHOW STUDENT
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

//make this component available to the app
export default Home;
