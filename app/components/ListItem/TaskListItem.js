import React, { Component } from 'react';
import { View, Text } from 'native-base';

import styles from './styles';

export default class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
    };
  }

  render() {
    const { task } = this.state;
    const textNameStyles = [styles.textName];

    if (task.complete) {
      textNameStyles.push({ textDecorationLine: 'line-through', color: 'gray' });
    }

    return (
      <View>
        <Text style={textNameStyles}>
          {task.name}
        </Text>
      </View>
    );
  }
}
