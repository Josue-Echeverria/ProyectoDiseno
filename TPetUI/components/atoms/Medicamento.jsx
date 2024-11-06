import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Medicamento = ({ nombre, imagen, cantidad, precio, vistaReducida }) => {
  return (
    <View style={vistaReducida ? styles.tarjeta : styles.container}>
        <Image 
          source={typeof imagen === 'number' ? imagen : { uri: imagen }} 
          style={vistaReducida ? styles.imagenMedicametoReducida : styles.imagenMedicameto } 
        />
      {vistaReducida ? (
        <View>
          <View style={styles.medicamentoCantidadReducida}>
            <Text>{nombre}</Text>
            </View>
          <View style={styles.medicamentoCantidadReducida}>
            <Text> {cantidad} x</Text>  
            <Text style={styles.textPrecio}> {precio}</Text>
          </View>
        </View>
        ):(
          <View style={styles.medicamentoCantidad}>
            <Text style={styles.cantidad}>{nombre}</Text>
            <Text style={styles.cantidad}> x {cantidad}</Text>
          </View>
      )}
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
    padding: 5,
  },
  imagenMedicameto: {
    width: '100%',
    height: 90,
    marginBottom: 10, 
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  imagenMedicametoReducida: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  medicamentoCantidad: {
    padding: 5,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    width: '100%',
  },
  medicamentoCantidadReducida: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    width: '81%',
    justifyContent: 'flex-end',
  },
  cantidad: {
    fontSize: 14,
    textAlign: 'center',
  },
  tarjeta: {
    padding: 10,
    backgroundColor: 'white',
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderWidth: 1,
    width: '100%',
  },
  textPrecio: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Medicamento;
