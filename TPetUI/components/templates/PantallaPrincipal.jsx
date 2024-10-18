import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import Boton from '../atoms/Boton.jsx';

const PantallaPrincipal = ({ goToVeterinarias, goToAgendar, goToPantallaPrincipal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TPet</Text>
      <Boton text="Agenda una Cita" onPress={goToVeterinarias} style={styles.customButtonStyle}/>
      <Boton text="Tus Citas" onPress={goToAgendar} style={styles.customButtonStyle}/>
      <NavBar goToPantallaPrincipal={goToPantallaPrincipal} />
    </View>
  );
};


const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
    padding: 10,
    position: 'absolute',  
    bottom: 0,             
    width: '100%',        
  },
  customButtonStyle: {
    marginLeft: 95,
    marginTop: 250,
    padding: 20,
    width: 200,
  },
});

export default PantallaPrincipal;
