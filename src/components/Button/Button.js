import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const Button = ({
  title,
  iconName,
  onPress,
  loading,
  theme = 'primary',
  iconColor,
}) => {
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {loading ? (
          <View style={styles[theme].button}>
            <ActivityIndicator color="white" />
          </View>
        ) : (
          <View style={styles[theme].button}>
            <Text
              style={[styles[theme].buttonText, iconName && {marginRight: 10}]}>
              {title}
            </Text>
            {iconName && <Icon name={iconName} size={25} color={iconColor} />}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
