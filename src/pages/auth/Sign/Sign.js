import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import colors from '../../../styles/colors';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setloading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler Uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    setloading(true);
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı Oluşturuldu!',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
    setloading(false);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/logoApp.png')}
      />
      <View style={styles.inputArea}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleFormSubmit}
          validate={values => {
            const errors = {};
            if (!values.usermail) {
              errors.usermail = 'E-posta adresi gerekli';
            }
            if (!values.password) {
              errors.password = 'Şifre gerekli';
            }
            if (!values.repassword) {
              errors.repassword = 'Şifre tekrarı gerekli';
            }
            return errors;
          }}>
          {({values, handleChange, handleSubmit, errors, touched}) => (
            <>
              <Input
                placeHolder={'E-Posta Adresinizi Giriniz'}
                onType={handleChange('usermail')}
                iconName={'mail-outline'}
                value={values.usermail}
              />
              {errors.usermail && touched.usermail && (
                <Text style={styles.errorText}>{errors.usermail}</Text>
              )}
              <Input
                placeHolder={'Şifrenizi Giriniz'}
                onType={handleChange('password')}
                iconName={'key-outline'}
                value={values.password}
                isSecure={true}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Input
                placeHolder={'Şifrenizi Tekrar Giriniz'}
                onType={handleChange('repassword')}
                iconName={'key-outline'}
                value={values.repassword}
                isSecure={true}
              />
              {errors.repassword && touched.repassword && (
                <Text style={styles.errorText}>{errors.repassword}</Text>
              )}
              <View style={styles.signUpButtonArea}>
                <Button
                  title={'Kaydol'}
                  iconName={'chevron-right-circle'}
                  onPress={handleSubmit}
                  theme="primary"
                  loading={loading}
                  iconColor={colors.offWhite}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.signUpArea}>
        <Text style={styles.question}>Zaten Bir Hesabın Var mı?</Text>
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signUpText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonArea}>
        <Button
          title={'Google'}
          iconName={'google'}
          theme="secondary"
          iconColor={colors.darkGrey}
          onPress={Alert.alert('Yakında Eklenecek!')}
        />
        <Button
          title={'Facebook'}
          iconName={'facebook'}
          theme="secondary"
          iconColor={colors.darkGrey}
          onPress={Alert.alert('Yakında Eklenecek!')}
        />
      </View>
    </View>
  );
};

export default Sign;
