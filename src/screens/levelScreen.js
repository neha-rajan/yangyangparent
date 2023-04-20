import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import TaskItem from '../components/TaskItem';
import { useRoute } from '@react-navigation/native';


export function LevelScreen({route, navigation}) {

    const [tasks, setTasks] = useState(route.params.taskList);
    // const levelScreen = () => {
    //   const route = useRoute;
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.taskContainer}>{route.params.task}</Text>
    //     </View>
    //   );
    // }
    

    const deleteTask = (deleteIndex) => {
      setTasks(tasks.filter((value, index) => index != deleteIndex));
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Khine's Level: 2 </Text>
        <Button style={styles.button}
          title="Add Tasks"
          color= '#f05e16'
          onPress={() => {
            navigation.goBack()
          }}
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
        <View style={styles.container}>
  </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingTop: 50,
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
  