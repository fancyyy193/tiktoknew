import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TIME_SPLASH} from '../constants/SystemConstant';
import {
  BOTTOM_TAB_NAVIGATOR,
  STACK_NAVIGATOR_AUTHENTICATION,
} from '../constants/Screens';
import Container from '../components/ingredient/Container';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const loggedIn = true;

  useEffect(() => {
    setTimeout(() => {
      if (loggedIn) {
        navigation.replace(BOTTOM_TAB_NAVIGATOR);
      } else {
        navigation.replace(STACK_NAVIGATOR_AUTHENTICATION);
      }
    }, TIME_SPLASH);
  }, []);

  return (
    <Container isCenter={true}>
      <Image
        style={styles.image}
        source={require('../assets/images/TikTok_Logo.png')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Nền đen cho toàn bộ màn hình
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
export default SplashScreen;
