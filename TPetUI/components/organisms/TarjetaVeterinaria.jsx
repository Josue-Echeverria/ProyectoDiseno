import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Estrellas from '../atoms/RateEstrellas.jsx';
import Boton from '../atoms/Boton.jsx';

const TarjetaVeterinaria = ({ nombre, horario, precio, imagen, cantEstrellas }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={typeof imagen === 'number' ? imagen : { uri: imagen }} 
          style={styles.imagenVeterinaria} 
        />
        <Estrellas stars={cantEstrellas} style={styles.estrellasContainer} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.description}>{horario}</Text>
        <Text style={styles.price}>{precio}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Boton text="Comentarios" onPress={() => console.log('Ver reviews presionado')} style={styles.customButtonStyle} />
        <Boton text="Agendar" onPress={() => console.log('Agendar presionado')} style={styles.customButtonStyle} />
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
    marginBottom: 20, // Separación entre tarjetas
    alignItems: 'center',
    marginLeft: '5%',
  },
  header: {
    alignItems: 'center', // Centra la imagen y las estrellas
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10, 
    flex: 1,
    alignItems: 'center', // Alinea el texto al centro
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  customButtonStyle: {
    marginTop: 10, 
  },
  imagenVeterinaria: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10, // Espacio entre la imagen y las estrellas
  },
  estrellasContainer: {
    marginTop: 10, // Asegura espacio entre la imagen y las estrellas
  },
});

export default TarjetaVeterinaria;
