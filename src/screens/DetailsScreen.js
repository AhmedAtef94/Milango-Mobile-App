import * as React from 'react';
import {View, Text, useColorScheme, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function DetailsScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: isDarkMode ? '#000' : '#fff'}}>Details Screen</Text>
    </View>
  );
}
