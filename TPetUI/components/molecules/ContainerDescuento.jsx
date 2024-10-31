import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import icono from '../../assets/descuento.png';

const DescuentoInfo = () => {
  return (
    <View style={styles.container}>
      <Image source={icono} style={styles.icon} />
      <Text style={styles.text}>10% de descuento en tu primer Cita</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 7,
    position: 'absolute',
    marginTop: 10,
    marginLeft: 19.5,
    borderRadius: 10,
    width: '90%',
    top: 640,
  },
  icon: {
    marginRight: 3,
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default DescuentoInfo;
