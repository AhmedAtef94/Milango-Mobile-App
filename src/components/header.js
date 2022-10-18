import React from 'react';
import {View, Text, useColorScheme, I} from 'react-native';
import {AppBar, IconButton, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {
  return (
    <AppBar
      title="Milango"
      leading={props => (
        <IconButton
          icon={props => <Icon name="medal" size={30} />}
          {...props}
        />
      )}
      trailing={props => (
        <HStack>
          <IconButton
            icon={props => <Icon name="magnify" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
  );
};
