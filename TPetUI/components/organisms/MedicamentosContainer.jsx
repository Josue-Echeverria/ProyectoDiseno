import React from 'react';
import { View, StyleSheet } from 'react-native';
import Medicamento from '../atoms/Medicamento'; // Adjust the import path as necessary
import BotonComprar from '../molecules/BotonComprar';
import {Svg, Text } from 'react-native-svg';

const MedicamentosContainer = ({ medicamentos, comprar, goToPantallaPrincipal }) => {
    let total = 0;
    return (
        <View style={styles.container}>
            <Svg height="50" width="100%">
            <Text fill="black" stroke=""  strokeWidth="1" x="12" y="30" fontSize="22" fontWeight="bold">
                Medicamentos recomendados
            </Text>
            </Svg>
            {medicamentos.map((medicamento, index) => (
                <Medicamento 
                    key={index} 
                    nombre={medicamento.nombre}
                    imagen={medicamento.imagen}
                    cantidad={medicamento.cantidad} 
                    vistaReducida={false}
                />
                
            ))}
            <BotonComprar
                text="Comprar Medicamentos"
                onPress={comprar}
                medicamentos={medicamentos}
                goToPantallaPrincipal={goToPantallaPrincipal}
              />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 0,
        borderRadius: 10,
    },
});

export default MedicamentosContainer;