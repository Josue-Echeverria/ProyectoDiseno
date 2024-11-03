import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NotasContainer from '../components/organisms/NotasContainer';
import MedicamentosContainer from '../components/organisms/MedicamentosContainer';
import BlueContainer from '../components/molecules/BlueContainer';
import acetaminofen from '../assets/acetaminofen.png';
import cremaRosas from '../assets/cremaRosas.jpg';
import BotonComprar from '../components/atoms/BotonComprar';

const medicamentos = [
  {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1}
  , {"nombre": "Crema de rosas", "imagen": cremaRosas, "cantidad": 2}]

const notas = [
                "El perro parece que tiene una infeccion"
                , "El perro necesita una vacuna"
                , "El perro necesita una cirug"
                , "El perro necesita una cirug"
                , "El perro necesita una cirug"
                , "El perro necesita una cirug"
                , "El perro necesita una cirug"
                , "El perro necesita una cirug"
              ]

const PantallaCitaFinalizada =({ goBack, goToAgendar, nombre, precio, especialidad, descripcion, cantEstrellas }) => {
  return (
    <View style={styles.pantalla}>
      <BlueContainer
        text="Cita Finalizada"
        onBackPress={goBack}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Notas tomadas por la IA</Text>            
        <NotasContainer
          notas={notas}
        />
        <Text style={[styles.title, styles.title2]}>Medicamentos recomenados</Text>  
        <MedicamentosContainer
          medicamentos={medicamentos}
        />
        <BotonComprar
          text="Comprar Medicamentos"
          onPress={goToAgendar}
          />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    pantalla: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    title:{
      marginTop: 80,
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
    },
    title2:{
      marginTop: 10
    },
    scrollView: {
      overflow: 'scroll',
    },

  });

export default PantallaCitaFinalizada;