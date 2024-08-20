import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.cream,
    borderRadius: 15,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: colors.lightGrey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // Android için gölge efekti
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  date: {
    fontSize: 14,
    color: colors.darkGrey,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:4
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  content: {
    fontSize: 18,
    color: colors.darkGrey,
  },
  umrumdamiArea: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.yellow,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android için gölgelendirme
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dislikeContainer: {
    position: 'absolute',
    top: -5,
    left: -10,
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    paddingHorizontal: 6,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android için gölgelendirme
  },
  dislike: {
    color: colors.offWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
