import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavItem from '../atoms/NavItem.jsx';
import casa from '../../assets/casa.png';
import campana from '../../assets/campana.png';
import usuario from '../../assets/usuario.png';
import mascotas from '../../assets/mascotas.png';

const NavBar = ({ goToPantallaPrincipal, onSettingsPress, onProfilePress }) => {
  return (
    <View style={styles.navbar}>
      <NavItem icono={casa} onPress={goToPantallaPrincipal} />
      <NavItem icono={campana} />
      <NavItem icono={usuario} />
      <NavItem icono={mascotas} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F9F7F3',
    padding: 7,
    position: 'absolute',  
    top: 720,             
    width: '100%', 
  },
});

export default NavBar;
