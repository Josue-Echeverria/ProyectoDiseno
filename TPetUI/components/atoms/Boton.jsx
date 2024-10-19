import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0FA3B1',
    padding: 10,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'open-sans',
    fontWeight: 'bold',
  },
});

export default Boton;
