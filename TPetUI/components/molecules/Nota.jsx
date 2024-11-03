import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nota = ({ nota }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>{nota}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#0FA3B1',
    borderRadius: 5,
  },
  texto: {
    color: 'white',
    fontSize: 15,
  },
});

export default Nota;
