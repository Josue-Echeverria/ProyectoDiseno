import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlueContainer = ({ text }) => {
  return (
    <View style={styles.container}>
      {/* <BackArrow onPress={onBackPress} />  */}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66AAFF',
    padding: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default BlueContainer;