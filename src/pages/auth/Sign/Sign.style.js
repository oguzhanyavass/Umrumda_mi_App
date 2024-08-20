import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.offWhite,
  },
  inputArea: {
    paddingBottom: 10,
  },
  signUpButtonArea: {
    paddingHorizontal: 10,
  },
  logo: {
    alignSelf: 'center',
    width: width * 0.6,
    height: undefined, // Yükseklik oranını tanımlamayacağız
    aspectRatio: 1, // Görüntü oranını korur (kare şeklinde)
    resizeMode: 'contain', // Görüntünün içeriği orijinal oranında tutulur
    marginBottom: 20,
  },
  signUpArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  signInButton: {
    padding: 5,
    margin: 5,
  },
  question: {
    paddingRight: 10,
    fontSize: 16,
    color: colors.darkGrey,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 5,
    marginHorizontal: 10,
    gap: 20,
  },
});
