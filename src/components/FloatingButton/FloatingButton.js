import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import styles from './FloatingButton.style';

const FloatingButton = ({onPress, iconName}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={35} color={colors.white} />
    </TouchableOpacity>
  </View>
);

export default FloatingButton;
