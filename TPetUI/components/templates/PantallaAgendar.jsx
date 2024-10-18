import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import Boton from '../atoms/Boton.jsx';

const PantallaAgendar = ({ goToVeterinarias }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TPet</Text>
        
        <Boton text="Agenda una Cita" onPress={goToVeterinarias} style={styles.customButtonStyle}/>
        <Boton text="Tus Citas" onPress={() => console.log('Botón presionado')} style={styles.customButtonStyle}/>
        <NavBar />
      </View>
    );
  };