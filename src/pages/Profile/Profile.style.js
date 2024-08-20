import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.c,
    padding: 20,
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.offWhite,
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: colors.cream,
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight:'bold',
    color: colors.offWhite,
    marginBottom: 5,
    textAlign:'center'
  },

  messageCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign:'center'
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    color: colors.yellow,
  },
});
