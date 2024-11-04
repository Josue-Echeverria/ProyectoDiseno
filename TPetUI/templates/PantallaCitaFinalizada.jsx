import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NotasContainer from '../components/organisms/NotasContainer';
import MedicamentosContainer from '../components/organisms/MedicamentosContainer';
import BlueContainer from '../components/molecules/BlueContainer';
import acetaminofen from '../assets/acetaminofen.png';
import cremaRosas from '../assets/cremaRosas.jpg';
import { useState } from 'react';

const PantallaCitaFinalizada =({ goBack, goToAgendar, nombre, precio, especialidad, descripcion, cantEstrellas }) => {
  const [notas, setNotas] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  const testMedicamentos = [
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
    {"nombre": "Acetaminofen", "imagen": acetaminofen , "cantidad": 1},
     {"nombre": "Crema de rosas", "imagen": cremaRosas, "cantidad": 2}
    ]

  const testNotas = [
                  "El perro parece que tiene una infeccion y al parecer tambien odia a su dueño sin razon por lo que se receta que se lleve a un psicologo"
                  , "El perro necesita una vacuna"
                  , "El perro necesita una cirugía"
                  , "El perro necesita una revisión"
                  , "El perro necesita una dieta especial"
                  , "El perro necesita ejercicio regular"
                  , "El perro necesita un chequeo mensual"
                  , "El perro necesita una limpieza dental"
                ]

  React.useEffect(() => {
    setNotas(testNotas);
    setMedicamentos(testMedicamentos);
  }, []);
  
  return (
    <View style={styles.pantalla}>
      <BlueContainer
        text="Cita Finalizada"
        onBackPress={goBack}
      />
      <ScrollView style={styles.scrollView}>
       
        {notas && (
          <NotasContainer notas={notas} />
        )}
        {medicamentos && (
          <MedicamentosContainer
            medicamentos={medicamentos}
            comprar={goToAgendar}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    pantalla: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#0FA3B1',
      height: 'auto',
      paddingBottom: 10,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      color: '#FFFFFF',
    },
    title2:{
      marginTop: 10,
      color: '#FFFFFF',
    },
    scrollView: {
      marginTop: 80,
      height: 'auto',
      flex: 1,
      marginBottom: 5,
    },

  });

export default PantallaCitaFinalizada;