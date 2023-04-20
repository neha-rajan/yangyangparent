import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { LevelScreen }  from "../screens/LevelScreen";
import { AddTaskScreen } from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} initialParams={{}} />
            <Stack.Screen name="LevelScreen" component={LevelScreen} initialParams={{}} />
        </Stack.Navigator>
    );
    
};

export default StackNavigator;