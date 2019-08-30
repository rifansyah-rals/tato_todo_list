import React from 'react';
import {
  View, Text, Icon
} from 'native-base';

import styles from './styles';

const GreetingText = () => (
  <View style={styles.container}>
    <Text style={styles.greetingTextPrimary}>Hey Reef,</Text>
    <Text style={styles.greetingText} note>
      These are tasks you have to make it done
      {'   '}
      <Icon style={{ color: 'red' }} name="flame" />
    </Text>
  </View>
);

export default GreetingText;
