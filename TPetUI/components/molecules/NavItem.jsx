import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavItem = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'black',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default NavItem;
