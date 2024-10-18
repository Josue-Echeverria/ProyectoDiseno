import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BackArrow from '../assets/backArrow.png'; 

const BlueContainer = ({ text, onBackPress, showBackArrow = true }) => {
  return (
    <View style={styles.container}>
      {showBackArrow && (
        <TouchableOpacity onPress={onBackPress} style={styles.arrowContainer}>
          <Image source={BackArrow} style={styles.image} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66AAFF',
    padding: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  arrowContainer: {
    alignItems: 'center', 
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default BlueContainer;
