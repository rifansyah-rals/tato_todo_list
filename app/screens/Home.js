import React, { useState, useEffect } from 'react';
import {
  Container,
  List,
  ListItem,
  Content,
  Text,
} from 'native-base';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { AddToListInput } from '../components/TextInput';
import { GreetingText } from '../components/Text';
import { TaskListItem } from '../components/ListItem';

const TASK_KEY = 'task';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const stringTasks = await AsyncStorage.getItem(TASK_KEY);
      if (stringTasks !== null) {
        const tempTasks = JSON.parse(stringTasks);
        setTasks([...tempTasks]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (task) => {
    try {
      const newTasks = [...tasks, task];
      await AsyncStorage.setItem(TASK_KEY, JSON.stringify(newTasks));
      setTasks(newTasks);
    } catch (e) {
      console.log(e);
    }
  };

  function addNewTask(taskName) {
    storeData(createTaskItem(taskName));
  }

  function removeTask(task) {
    const removedTask = tasks.find((willRemoveTask) => willRemoveTask.id === task.id);
    const index = tasks.indexOf(removedTask);
    tasks.splice(index, 1);
    updateData(tasks);
  }

  function showRemoveDialog(task) {
    Alert.alert(
      'Remove Confirmation',
      'Delete selected task ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'OK', onPress: () => removeTask(task) },
      ],
    );
  }

  function createTaskItem(name) {
    return {
      id: tasks.length + 1,
      name,
      complete: false,
    };
  }

  function changeItemCompletionStatus(id) {
    const tempTask = tasks.find((task) => task.id === id);
    tempTask.complete = !tempTask.complete;
    updateData(tasks);
  }

  const updateData = async (newTasks) => {
    try {
      await AsyncStorage.setItem(TASK_KEY, JSON.stringify(newTasks));
      setTasks([...tasks]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <GreetingText />
      <AddToListInput onPress={addNewTask} />
      <Content>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: 'bold' }}>On going tasks</Text>
          </ListItem>
          {tasks.map((task) => (task.complete
            ? null
            : (
              <ListItem
                onPress={() => changeItemCompletionStatus(task.id)}
                onLongPress={() => showRemoveDialog(task)}
                key={task.id}
              >
                <TaskListItem
                  task={task}
                />
              </ListItem>
            )))}
          {tasks.length === 0
            ? <Text style={{ padding: 10 }} note>No task</Text>
            : null}
          <ListItem itemDivider>
            <Text style={{ fontWeight: 'bold' }}>Completed tasks</Text>
          </ListItem>
          {tasks.map((task) => (task.complete
            ? (
              <ListItem
                onPress={() => changeItemCompletionStatus(task.id)}
                onLongPress={() => showRemoveDialog(task)}
                key={task.id}
              >
                <TaskListItem task={task} />
              </ListItem>
            )
            : null))}
          {tasks.length === 0
            ? <Text style={{ padding: 10 }} note>No task</Text>
            : null}
        </List>
      </Content>
    </Container>
  );
}
