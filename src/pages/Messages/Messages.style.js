import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  header: {
    padding: 10,
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.orange,
  },
});

export default styles;
