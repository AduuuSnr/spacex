import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LaunchDetails,
  NextLaunches,
  PastLaunches,
} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NextLaunches" component={NextLaunches} />
        <Stack.Screen name="PastLaunches" component={PastLaunches} />
        <Stack.Screen name="LaunchDetails" component={LaunchDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
