import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NotasContainer from '../components/organisms/NotasContainer';
import MedicamentosContainer from '../components/organisms/MedicamentosContainer';
import BlueContainer from '../components/molecules/BlueContainer';
import desparisante from '../assets/desparasitante.jpeg';
import vetericyn from '../assets/vetericyn.jpeg';
import dermolan from '../assets/dermolan.jpg';
import { useState } from 'react';

const PantallaCitaFinalizada =({ goBack, goToAgendar }) => {
  const [notas, setNotas] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  const testMedicamentos = [
    {"nombre": "Desparasintante", "imagen": desparisante , "cantidad": 2, "precio": 4750},
    {"nombre": "Vetericyn", "imagen": vetericyn , "cantidad": 1, "precio": 5000},
    {"nombre": "Dermolan", "imagen": dermolan , "cantidad": 1, "precio": 4850},
    ]

  const testNotas = [
                 "El perro presenta una irritación en la piel, en la parte atras de la oreja izquierda"
                  , "Su ultima desparasitación fue hace 3 meses"
                  , "Debe aplicar Dermolan y Vetericyn en la zona afectada 2 veces al día"
                  , "Debe aplicar el desparasitante en 3 días"
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
            goToPantallaPrincipal={goBack}
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