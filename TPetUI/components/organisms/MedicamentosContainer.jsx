import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Medicamento from '../molecules/Medicamento'; // Adjust the import path as necessary

const MedicamentosContainer = ({ medicamentos }) => {
    return (
        <View style={styles.container}>
            {medicamentos.map((medicamento, index) => (
                <Medicamento 
                    key={index} 
                    nombre={medicamento.nombre}
                    imagen={medicamento.imagen}
                    cantidad={medicamento.cantidad} 
                />
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'lightgrey',
        margin: 10,
        borderRadius: 10,
    },
});

export default MedicamentosContainer;