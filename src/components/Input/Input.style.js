import {StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 10,
  },
  input: {
    padding: Platform.OS == 'android' ? 5 : 10,
    fontSize: 16,
  },
  placeHolderColor: {
    color: colors.white,
  },
});
