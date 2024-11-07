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
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    width: '98%',
  },
  texto: {
    color: 'grey',
    fontSize: 15,
  },
});

export default Nota;
