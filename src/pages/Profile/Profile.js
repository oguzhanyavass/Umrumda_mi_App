import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';
import colors from '../../styles/colors';

const Profile = ({navigation}) => {
  const [messageCount, setMessageCount] = React.useState(0);
  const userMail = auth().currentUser.email;
  const username = userMail.split('@')[0];

  React.useEffect(() => {
    const onValueChange = database()
      .ref('messages/')
      .orderByChild('username')
      .equalTo(username)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          setMessageCount(0);
          return;
        }
        setMessageCount(Object.keys(contentData).length);
      });

    return () => database().ref('messages/').off('value', onValueChange);
  }, [username]);

  function handleSignOut() {
    auth().signOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileCard}>
        <Icon
          name="person-circle-outline"
          size={100}
          color={styles.icon.color}
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{userMail}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Dert Sayısı</Text>
        <Text style={styles.messageCount}>{messageCount}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Çıkış Yap"
          onPress={handleSignOut}
          iconName={'account-arrow-right'}
          iconColor={colors.offWhite}
          theme="primary"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
