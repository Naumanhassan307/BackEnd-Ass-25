//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Home from "./src/screens/home/Home"
import Show from './src/screens/show/Show';
// create a component
const App = () => {
  return (
    <>
    {/* <Home /> */}
    <Show />
    </>
  );
};



//make this component available to the app
export default App;
