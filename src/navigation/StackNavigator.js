import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { addTaskScreen } from "../screens/addTaskScreen";
import  { levelScreen }  from "../screens/levelScreen";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="addTaskScreen" component={addTaskScreen} />
            <Stack.Screen name="levelScreen" component={levelScreen} />
        </Stack.Navigator>
    );
    
};

export default StackNavigator;