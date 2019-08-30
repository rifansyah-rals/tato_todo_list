import React, { useState } from 'react';
import {
  Input,
  Item,
  View,
  Text
} from 'native-base';

import { TouchableHighlight } from 'react-native';
import styles from './styles';

export default function AddToListInput(props) {
  const [taskItem, setTaskItem] = useState('');
  const { onPress } = props;

  function onChangeText(text) {
    setTaskItem(text);
  }

  return (
    <View style={styles.container}>
      <Item style={styles.input} regular>
        <Input placeholder="Add task" onChangeText={(text) => onChangeText(text)} value={taskItem} />
      </Item>
      <TouchableHighlight onPress={() => {
        onPress(taskItem);
        onChangeText('');
      }}
      >
        <View>
          <Text style={styles.addText}>Add</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
