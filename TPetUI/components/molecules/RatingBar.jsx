import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estrellas from '../atoms/RateEstrellas';
import { ProgressBar } from 'react-native-paper'; // Puedes usar esta librería o cualquier otra de barras de progreso
import Boton from '../atoms/Boton';

const RatingBar = ({  totalReviews, ratingsDistribution, goToReviews, nombre, precio, especialidad, descripcion, cantEstrellas}) => {
  return (
    <View style={styles.container}>
      {/* Calificación promedio */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{cantEstrellas}</Text>
        <Estrellas stars={cantEstrellas} />
        <Text style={styles.totalReviews}>{totalReviews.toLocaleString()} reviews</Text>
        <Boton 
          style={styles.botonVerReviews} 
          text="Ver Reviews" 
          onPress={() => goToReviews(nombre, precio, especialidad, descripcion, cantEstrellas)} 
        />
      </View>

      {/* Distribución de calificaciones */}
      <View style={styles.distributionContainer}>
        {ratingsDistribution.map((value, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.starText}>{5 - index}</Text>
            <Estrellas stars={5 - index} />
            <ProgressBar progress={value} color="#007AFF" style={styles.progressBar} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginLeft : 20,
        marginRight : 20,
        bottom: 500,
        borderRadius: 15,
    },
    botonVerReviews: {
        marginTop: 10,
        height: 40,
        width: 120,
        borderRadius: 5,
        },
    ratingContainer: {
        alignItems: 'center',
        marginRight: 20,
    },
    rating: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    totalReviews: {
        fontSize: 14,
        color: '#555',
    },
    distributionContainer: {
        flex: 1,
        
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 5,
        
    },
    starText: {
        fontSize: 14,
        marginRight: 5,
    },
    progressBar: {
        flex: 1,
        borderRadius: 5,
        marginLeft: 5,
        padding: 10,
        width: 90,
        height: 100,
    },
});

export default RatingBar;
