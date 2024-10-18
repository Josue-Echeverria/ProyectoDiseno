import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Estrellas = ({ stars }) => {
  const filledStars = '★'.repeat(stars);
  const emptyStars = '☆'.repeat(5 - stars);

  return (
    <View style={styles.starContainer}>
      <Text style={styles.stars}>{filledStars + emptyStars}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  stars: {
    color: '#FFD700', // Color dorado para las estrellas
    fontSize: 18,
  },
});

export default Estrellas;
