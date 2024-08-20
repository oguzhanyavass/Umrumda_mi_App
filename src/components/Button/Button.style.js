import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android için gölgelendirme
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 0, // İkon yoksa margin sıfırlanacak
    textAlign: 'center',
  },
});
export default {
  primary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: colors.orange,
    },
    buttonText: {
      ...base_style.buttonText,
      color: colors.offWhite,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: colors.cream,
    },
    buttonText: {
      ...base_style.buttonText,
      color: colors.darkGrey,
    },
  }),
  tertiary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: colors.darkGrey,
    },
    buttonText: {
      ...base_style.buttonText,
      color: colors.offWhite,
    },
  }),
};
