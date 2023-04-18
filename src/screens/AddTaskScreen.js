import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import TaskInputField from '../components/TaskInputField';
import TaskItem from '../components/TaskItem';
import  { LevelScreen }  from "./levelScreen";

export function AddTaskScreen({navigation}) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }
  
/*
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }
  */

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Add Tasks </Text>
      <Button style={styles.button}
        title="See Khine's Progress"
        onPress={() => 
          navigation.navigate("levelScreen", {
            screen: "levelScreen",
            params: {tasks}
          })
        }
      />
        <ScrollView style={styles.scrollView}>
          {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            );
          })
        }
        </ScrollView>
      <TaskInputField addTask={addTask}/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fffcfc',
    justifyContent: 'space-between'
  },
  heading: {
    justifyContent:"flex-start",
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 50,
  },
  image: {
    margin: "10%",
    marginLeft: "80%",
    width: 66,
    height: 58,
    borderRadius: "100%"
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  button: {
    flex: 1,
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    margin: 10  }
});
