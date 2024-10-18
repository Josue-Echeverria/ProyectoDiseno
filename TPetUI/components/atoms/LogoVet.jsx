import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/LogoVetDefault.jpg')} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default Logo;
