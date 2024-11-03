import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Medicamento = ({ nombre, imagen, cantidad }) => {
  return (
    <View style={styles.container}>
        <Image 
          source={typeof imagen === 'number' ? imagen : { uri: imagen }} 
          style={styles.imagenMedicameto} 
        />
      <View style={styles.medicamentoCantidad}>
        <Text style={styles.cantidad}>{nombre}</Text>
        <Text style={styles.cantidad}> x {cantidad}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',  
    alignItems: 'center',
    width: '44%',
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 5,
    borderColor: '#AAAAAA', 
    borderWidth: 2,
  },
  imagenMedicameto: {
    width: '100%',
    height: 90,
    marginBottom: 10, 
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    
  },
  medicamentoCantidad: {
    padding: 5,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    width: '100%',
  },
  cantidad: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Medicamento;
