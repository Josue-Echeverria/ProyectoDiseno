import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const NavItem = ({ icono, onPress }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Image source={icono} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default NavItem;
