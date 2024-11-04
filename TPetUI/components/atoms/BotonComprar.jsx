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
    backgroundColor: '#0FA3B1',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginBottom: 0,
    width: '95%',
    height: 50,
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
