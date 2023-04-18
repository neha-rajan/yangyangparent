import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AddTaskScreen } from "../screens/AddTaskScreen";
import  { levelScreen }  from "../screens/levelScreen";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
            <Stack.Screen name="levelScreen" component={levelScreen} />
        </Stack.Navigator>
    );
    
};

export default StackNavigator;