import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import casa from '../../assets/casa.png';
import campana from '../../assets/campana.png';
import usuarioMascota from '../../assets/userPet.png';

const NavBar = ({ goToPantallaPrincipal, goToNotificaciones, goToMascotas }) => {
  const [selected, setSelected] = React.useState(null);

  const handlePress = (index, onPress) => {
    setSelected(index);
    onPress();
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handlePress(0, goToPantallaPrincipal)} style={[styles.navItem, selected === 0 ? styles.pressed : null]}>
        <Image source={casa} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(1, goToNotificaciones)} style={[styles.navItem, selected === 1 ? styles.pressed : null]}>
        <Image source={campana} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(2, goToMascotas)} style={[styles.navItem, selected === 2 ? styles.pressed : null]}>
        <Image source={usuarioMascota} style={styles.icon} />
      </TouchableOpacity>
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
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  pressed: {
    opacity: 1,
    borderRadius: 10,
  },
});

export default NavBar;
