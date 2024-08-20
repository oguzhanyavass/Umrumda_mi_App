import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: colors.cream,
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.3,
    gap: 25,
    flex: 0.5,
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    paddingBottom: 40,
    backgroundColor: colors.offWhite,
    borderRadius: 15,
  },
  scrollContainer: {
    flexGrow: 1, // İçerik uzadıkça kaydırılabilir hale gelmesini sağlar
    width: '100%',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  dragHandle: {
    width: width * 0.1,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.lightGrey,
    marginBottom: 10, // Çubuğun altındaki içerik ile boşluk
    alignSelf: 'center',
  },
});
