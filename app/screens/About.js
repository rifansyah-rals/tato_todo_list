import React from 'react';
import { Image, View } from 'react-native';

const logo = require('../assets/images/logo.png');

const About = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={logo} />
  </View>
);

export default About;
