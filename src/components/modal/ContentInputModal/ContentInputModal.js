import React, {useState} from 'react';
import {Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './ContentInputModal.style';
import Button from '../../Button';
import Modal from 'react-native-modal';
import colors from '../../../styles/colors';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      swipeDirection="down"
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View style={styles.dragHandle} />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'İçini Dök...'}
              placeholderTextColor={colors.cream}
              onChangeText={setText}
              multiline
              style={{
                color: colors.darkGrey,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            />
          </View>
        </ScrollView>
        <Button theme="tertiary" title={'Gönder'} onPress={handleSend} iconName={'send'} iconColor={colors.offWhite}/>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ContentInputModal;
