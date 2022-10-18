// In App.js in a new project

import * as React from 'react';
import {View, Text, useColorScheme, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './src/screens/HomeScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';
import {Header} from './src/components/header';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Explore" component={HomeScreen} />
          <Stack.Screen name="Repositories" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
