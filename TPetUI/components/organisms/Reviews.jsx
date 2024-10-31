import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Estrellas from '../atoms/RateEstrellas'; // Componente de estrellas
import imagen1 from '../../assets/LogoVetDefault.png'; // Imagen del usuario

const ReviewItem = ({ userName, reviewText, rating, date }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.headerContainer}>
        <Image source={imagen1} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.reviewDate}>{date}</Text>
        </View>
      </View>

      {/* Rating - Estrellas */}
      <View style={styles.ratingContainer}>
        <Estrellas stars={rating} />
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 12,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
});

export default ReviewItem;
