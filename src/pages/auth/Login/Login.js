import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import colors from '../../../styles/colors';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('MessagesPage');
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
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
              <View style={styles.buttonArea}>
                <Button
                  title={'Giriş Yap'}
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
        <Text style={styles.question}>Henüz Bir Hesabın Yok mu?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Kaydol</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonArea}>
        <Button
          title={'Google'}
          iconName={'google'}
          theme="secondary"
          iconColor={colors.darkGrey}
          onPress={() => Alert.alert('Yakında Eklenecek!')}
        />
        <Button
          title={'Facebook'}
          iconName={'facebook'}
          theme="secondary"
          iconColor={colors.darkGrey}
          onPress={() => Alert.alert('Yakında Eklenecek!')}
        />
      </View>
    </View>
  );
};

export default Login;
