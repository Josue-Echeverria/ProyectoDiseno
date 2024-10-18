import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';


const BackArrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.arrowContainer}>
      <Image
        source={require('../assets/backArrow.png')} 
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    padding: 10,
  },
  arrow: {
    width: 24,
    height: 24,
  },
});

export default BackArrow;
