import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


//screens
import { HomeScreen } from '../screens'
import { HEADER_HOME } from '../constants/Strings'

const Stack = createStackNavigator()


export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={HEADER_HOME} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}