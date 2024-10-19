import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavBar from '../molecules/NavBar.jsx';
import Boton from '../atoms/Boton.jsx';
import agenda from '../assets/Agendar.jpg';  
import citas from '../assets/MisCitas.jpg'; 
import BlueContainer from '../molecules/BlueContainer.jsx';
import DiscountModal from '../molecules/NotificacionDescuento.jsx';

const PantallaPrincipal = ({ goToVeterinarias, goToAgendar, goToPantallaPrincipal }) => {

  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

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
      <DiscountModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#0FA3B1',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    width: '70%',
    marginBottom: 20, // Separación entre tarjetas
    alignItems: 'center',
    marginLeft: '15%',
     
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
