import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import Boton from '../atoms/Boton.jsx';
import agenda from '../assets/Agendar.jpg';  // Importa la imagen
import citas from '../assets/MisCitas.jpg';  // Importa la imagen
import BlueContainer from '../molecules/BlueContainer.jsx';

const PantallaPrincipal = ({ goToVeterinarias, goToAgendar, goToPantallaPrincipal }) => {
  return (
    <View style={styles.container}>
      <BlueContainer text="TPet" showBackArrow={false} />

      {/* Contenedor para la primera imagen y botón */}
      <View style={styles.imageButtonContainer}>
        <Image source={agenda} style={styles.image} />
        <Boton text="Agenda una Cita" onPress={goToVeterinarias} style={styles.customButtonStyle}/>
      </View>

      {/* Contenedor para la segunda imagen y botón */}
      <View style={styles.imageButtonContainer}>
        <Image source={citas} style={styles.image} />
        <Boton text="Tus Citas" onPress={goToAgendar} style={styles.customButtonStyle}/>
      </View>

      <NavBar goToPantallaPrincipal={goToPantallaPrincipal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra los elementos verticalmente
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
    padding: 10,
    position: 'absolute',  
    bottom: 0,             
    width: '100%',        
  },
  imageButtonContainer: {
    alignItems: 'center', 
    marginBottom: 70, 
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10, // Espacio entre la imagen y el botón
  },
  customButtonStyle: {
    padding: 20,
    width: 200,
  },
});

export default PantallaPrincipal;
