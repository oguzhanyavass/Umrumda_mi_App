import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import Button from '../Button';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageCard = ({message, onUmrumdami}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.username}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{message.text}</Text>
        </View>
        <View style={styles.umrumdamiArea}>
          <TouchableOpacity style={styles.button} onPress={onUmrumdami}>
            <Icon name={'head-question'} color={colors.lightGrey} size={25} />
            <Text style={styles.buttonText}> Umrumda mı ?</Text>
            {!!message.dislike && (
              <View style={styles.dislikeContainer}>
                <Text style={styles.dislike}>{message.dislike}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
