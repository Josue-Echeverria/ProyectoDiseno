import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nota = ({ nota }) => {
  return (
    <View style={styles.starContainer}>
        <Text>{nota}</Text>
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

export default Nota;
