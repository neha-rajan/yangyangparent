import React, {useEffect, useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';
import TaskInputField from '../components/TaskInputField';
import TaskItem from '../components/TaskItem';


export function AddTaskScreen({navigation}) {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    if (title == null) return;

    // add task to the backend
    fetch(`https://virtual-pet-c74k.onrender.com/add-task?task=${title}`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "id": 78912 })
    })
    .then(response => response.json())
    .then(
        (response) => {
          task = {id: response.id, title: title}
          setTasks([...tasks, task]);

          console.log(tasks);
        }
      )

    Keyboard.dismiss();
  }

  useEffect(() => {
    fetch("https://virtual-pet-c74k.onrender.com/tasks")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.tasks); 
            let existingTasks = 
            setTasks(result.tasks);
          }
        )
  }, []);

  const deleteTask = async (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
    console.log(deleteIndex);
    await fetch(`https://virtual-pet-c74k.onrender.com/delete-task/${deleteIndex}`, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "id": 78912 })
    })

    updateTaskList();
  }

  const updateTaskList = () => {
    fetch("https://virtual-pet-c74k.onrender.com/tasks")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.tasks); 
            setTasks(result.tasks);
          }
        )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Added Tasks </Text>
      <ScrollView style={styles.scrollView}>
          {
          tasks.map((task, index) => {
            return (
              <View key={task.id} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task.title} deleteTask={() => deleteTask(task.id)}/>
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField style={styles.inputField} addTask={addTask}/>
      <Button style={styles.button}
        title="See Khine's Progress"
        color= '#f05e16'
        onPress={() => 
          navigation.navigate("LevelScreen", {taskList: tasks})
        }
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 50,
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
    fontSize: 30,
    fontWeight: '600',
    margin: 10
  },
});
