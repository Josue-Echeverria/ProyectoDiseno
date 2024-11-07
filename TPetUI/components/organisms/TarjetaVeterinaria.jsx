import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Boton from '../atoms/Boton.jsx';
import Estrellas from '../atoms/RateEstrellas.jsx';

const TarjetaVeterinaria = ({ nombre, horario, especialidad, rating, descripcion, precio, imagen, goToAgendar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={typeof imagen === 'number' ? imagen : { uri: imagen }} 
          style={styles.imagenVeterinaria} 
        />
        {rating ? <Estrellas stars={rating} style={styles.estrellasContainer} /> : null}
      </View>
      <View style={styles.textContainer}>
        {nombre ? <Text style={styles.title}>{nombre}</Text> : null}
        {especialidad ? <Text style={styles.specialty}>{especialidad}</Text> : null}
        {horario ? <Text style={styles.schedule}>{horario}</Text> : null}
        {descripcion ? <Text style={styles.description}>{descripcion}</Text> : null}
        {precio ? (
          <View style={styles.row}>
            <Text style={styles.priceBefore}>₡{precio}</Text>
            <Text style={styles.priceAfter}>₡{precio - precio * 0.10}</Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <Boton 
            text="Agenda tu cita" 
            onPress={() => goToAgendar(nombre, precio, especialidad)} 
            style={styles.customButtonStyle} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15, // Bordes más redondeados como en la imagen
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000', // Sombra ligera para darle profundidad
    shadowOpacity: 0.1,
    top: 25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 20, // Separación vertical entre tarjetas
    alignSelf: 'center', // Alineación central
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  priceBefore: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginBottom: 10,
  },
  priceAfter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    alignItems: 'center', 
    marginTop: -50, 
    marginBottom: 10,
  },
  imagenVeterinaria: {
    width: 90,  
    height: 90,
    borderRadius: 45,  
    marginBottom: 10,  
  },
  textContainer: {
    alignItems: 'center', // Centrar todo el contenido de texto
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 14,
    color: '#555', // Color más suave para el texto de especialidad
    marginBottom: 3,
  },
  schedule: {
    fontSize: 12,
    color: '#777', // Color más claro para el horario
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
    marginBottom: 10,
    height: 30,
  },
  buttonContainer: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  customButtonStyle: {
    width: '70%', // Hacer el botón más pequeño y centrado
    height: 45,
  },
  estrellasContainer: {
    marginTop: 10, // Asegura espacio entre la imagen y las estrellas
  },
});

export default TarjetaVeterinaria;
