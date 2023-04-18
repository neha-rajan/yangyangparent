import React, {useState} from 'react';
import { ImageBackground, Keyboard, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import TaskInputField from '../components/TaskInputField';
import TaskItem from '../components/TaskItem';
import  { AddTaskScreen }  from "./AddTaskScreen";
import  { tasks }  from "./AddTaskScreen";
import { useRoute } from '@react-navigation/native';


export function levelScreen({navigation}) {
    const [tasks, setTasks] = useState([]);
    const levelScreen = () => {
    const route = useRoute;
    return (
      <View style={styles.container}>
        <Text style={styles.taskContainer}>{route.params.task}</Text>
      </View>
    );
}
    
  
  /*
    const deleteTask = (deleteIndex) => {
      setTasks(tasks.filter((value, index) => index != deleteIndex));
    }
    */
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Khine's Level: 2 </Text>
        <Button style={styles.button}
          title="Add Tasks"
          onPress={() => 
            navigation.navigate("AddTaskScreen")
          }
        />
        <ScrollView style={styles.scrollView}>
          {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task}/>
              </View>
            );
          })
        }
        </ScrollView>
        <View style={styles.container}>
  </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffcfc',
    },
    subcontainer: {
      flex: 1,
      backgroundColor: '#fffcfc'
    },
    heading: {
        justifyContent:"flex-start",
        color: '#000000',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 60,
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
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    }
  );
  