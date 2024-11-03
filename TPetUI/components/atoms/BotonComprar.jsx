import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonComprar = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //Red
    backgroundColor: '#FF0000',
    padding: 10,
    width: 150,
    borderRadius: 5,
    margin: 10,
    width: '95%',
    height: '7%',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'open-sans',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BotonComprar;
