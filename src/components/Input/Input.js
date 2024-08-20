import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

const Input = ({placeHolder, iconName, onType, value, isSecure}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      {iconName && (
        <>
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={22} color={colors.offWhite} />
          </View>
        </>
      )}
      <TextInput
        style={[
          styles.input,
          {color: isFocused ? colors.white : colors.lightGrey},
        ]}
        placeholder={placeHolder}
        placeholderTextColor={colors.cream}
        onChangeText={onType}
        value={value}
        autoCapitalize="none"
        secureTextEntry={isSecure}
        onFocus={() => setIsFocused(true)}
        cursorColor={colors.orange}
        multiline
      />
    </View>
  );
};
export default Input;
