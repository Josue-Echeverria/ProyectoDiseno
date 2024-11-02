import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Medicamento = ({ nombre, imagen, cantidad }) => {
  return (
    <View style={styles.starContainer}>
        <Text>{nombre}</Text>
        <Text>{imagen}</Text>
        <Text>{cantidad}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Medicamento;
