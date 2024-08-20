import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import FlashMessage from 'react-native-flash-message';

export default () => {
  return (
    <>
      <MainNavigator />
      <FlashMessage position="top" />
    </>
  );
};
