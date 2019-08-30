import React, { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  Content,
  Text,
} from 'native-base';

import { AddToListInput } from '../components/TextInput';
import { GreetingText } from '../components/Text';
import { TaskListItem } from '../components/ListItem';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    setTasks([...tasks, createTaskItem(task)]);
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
    setTasks([...tasks]);
  }

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
