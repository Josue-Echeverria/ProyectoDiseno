import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Estrellas from '../atoms/RateEstrellas.jsx';
import Boton from '../atoms/Boton.jsx';

const TarjetaVeterinaria = ({ nombre, descripcion, precio, imagen, cantEstrellas }) => {
    console.log(nombre, descripcion, precio, imagen, cantEstrellas);
  return (
    <View style={styles.container}>
      {/* Contenedor del Logo y el texto */}
      <View style={styles.header}>
        <Image source={imagen} style={styles.imagenVeterinaria} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{nombre}</Text> {/*nombre de la veterinaria*/}
          <Text style={styles.description}>{descripcion}</Text> {/*descripción de la veterinaria*/}
          <Text style={styles.price}>{precio}</Text> {/*precio de la veterinaria*/}
        </View>
      </View>

      {/* Botón de Reserva */}
      <Boton text="Agendar" onPress={() => console.log('Botón presionado')} style={styles.customButtonStyle} />

      {/* Estrellas */}
      <View style={styles.estrellasContainer}>
        <Estrellas stars={cantEstrellas} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    width: '90%',
    marginBottom: 0,
    alignItems: 'center',
    marginLeft: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10, 
    flex: 1, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  customButtonStyle: {
    marginVertical: 20,
    marginTop: -10,
    marginLeft: 95,
  },
  estrellasContainer: {
    marginTop: -70,
    marginLeft: -215,
  },
  imagenVeterinaria: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default TarjetaVeterinaria;
