import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // paquete de iconos

const TabIcon = ({ iconName, title, isFocused }) => {
  return (
    <View style={styles.container}>
      <Icon 
        name={iconName} 
        size={25} 
        color={isFocused ? '#4F6D7A' : '#D0D0D0'} 
      />
      <Text style={[styles.text, isFocused && styles.focusedText]}>
        {title}
      </Text>
      {isFocused && <View style={styles.indicator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: '#D0D0D0',
  },
  focusedText: {
    color: '#4F6D7A',
  },
  indicator: {
    marginTop: 4,
    width: '60%',
    height: 2,
    backgroundColor: '#4F6D7A',
  },
});

export default TabIcon;
