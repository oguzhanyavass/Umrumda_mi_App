import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Messages from '../pages/Messages';
import Profile from '../pages/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/modal/ContentInputModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObject);
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === 'MessagesPage') {
              iconName = 'message-text';
            } else if (route.name === 'ProfilePage') {
              iconName = 'account';
            }

            return (
              <Icon
                name={iconName}
                size={focused ? 28 : 25}
                color={color}
                style={{marginBottom: -3}}
              />
            );
          },
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.cream,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5,
          },
          tabBarStyle: {
            paddingTop: 5,
            height: height * 0.08,
            backgroundColor: colors.black,
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.black,
          },
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen
          name="MessagesPage"
          component={Messages}
          options={{
            title: 'Dert Köşesi',
            headerTintColor: colors.orange,
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={Profile}
          options={{
            title: 'Profil',
            headerTintColor: colors.orange,
          }}
        />
      </Tab.Navigator>
      <FloatingButton iconName="add-outline" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </>
  );
};

export default MainTabs;
