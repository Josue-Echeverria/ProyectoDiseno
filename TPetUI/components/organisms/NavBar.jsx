import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavItem from '../atoms/NavItem.jsx';

const NavBar = ({ goToPantallaPrincipal, onSettingsPress, onProfilePress }) => {
  return (
    <View style={styles.navbar}>
      <NavItem iconName="inicio" text="Inicio" onPress={goToPantallaPrincipal} />
      <NavItem iconName="notificaciones" text="Notificaciones" onPress={onSettingsPress} />
      <NavItem iconName="usuario" text="Usuario" onPress={onProfilePress} />
      <NavItem iconName="mascotas" text="Mi Mascota" onPress={onProfilePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#66AAFF',
    padding: 10,
    position: 'absolute',  
    top: 720,             
    width: '100%', 
  },
});

export default NavBar;
