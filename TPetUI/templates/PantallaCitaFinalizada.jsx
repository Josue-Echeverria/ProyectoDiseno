import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NotasContainer from '../components/organisms/NotasContainer';
import MedicamentosContainer from '../components/organisms/MedicamentosContainer';

const PantallaCitaFinalizada =({ goBack, goToAgendar, nombre, precio, especialidad, descripcion, cantEstrellas }) => {
    return (
        <View style={styles.starContainer}>
            <Text>Pantalla Cita Finalizada</Text>
            <NotasContainer
                notas={["El perro parece que tiene una infeccion", "El perro necesita una vacuna", "El perro necesita una cirug"]}
            />
            <MedicamentosContainer
                medicamentos={[{"nombre": "Vacuna", "imagen": "imagen", "cantidad": 1}, {"nombre": "Antibiotico", "imagen": "imagen", "cantidad": 2}]}
            />
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

export default PantallaCitaFinalizada;