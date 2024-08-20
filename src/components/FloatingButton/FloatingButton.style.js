import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height*0.03, // Tab bar yüksekliğine göre ayarlayın
    alignSelf: 'center', // Ortalar
    backgroundColor: colors.orange,
    borderRadius: 50, // Butonun yarıçapı kadar büyük olmalı
    width: width*0.18,
    height: width*0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
