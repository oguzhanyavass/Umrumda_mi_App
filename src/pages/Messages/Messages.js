import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import styles from './Messages.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard';
const Messages = ({navigation}) => {
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleOnUmrumdami(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => (
    <MessageCard message={item} onUmrumdami={() => handleOnUmrumdami(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
    </SafeAreaView>
  );
};

export default Messages;
